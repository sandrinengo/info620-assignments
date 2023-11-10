const readlineSync = require("readline-sync");

function PredictPopulation() {
    try {
        let number = PromptUntilValid("Starting number of organisms: ");
        let percentIncrement = PromptUntilValid("Average daily increase: ");
        let numberDays = PromptUntilValid("Number of days to multiply: ");

        let startDay = numberDays - (numberDays - 1);
        console.log("Day \t Population");
        console.log(`${startDay} \t ${number}`);//day 1
        for (i = startDay + 1; i <= numberDays; i++) {
            number = number + (number * (percentIncrement / 100));

            console.log(`${i} \t ${number}`);
        }
    }
    catch (ex) {
        console.log(ex);
    }
}

function PromptUntilValid(command) {
    let number;
    //if user enters a number less than or equal to 0, ask them to enter again.
    do {
        number = readlineSync.questionInt(command);
        //change the verbiage when user enter invalid number.
        command = "=> Number should be greater than Zero. Enter again: ";
    } while (number <= 0);

    return number;
}

//export the function, so we can call it in app.js
module.exports = {
    PredictPopulation
};