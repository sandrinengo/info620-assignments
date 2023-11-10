const readlineSync = require("readline-sync");
let guessLimit = 5;

function GetRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function GuessNumber() {
    let number;
    let command;
    const randomNumber = GetRandom();
    console.log("Guess any number between 1 and 100: ");
    do {
        --guessLimit; //decrease the number of guess each time.
        number = readlineSync.questionInt(command);
        command = "=> Guess again : ";
        //if within 5-allow-times, user guesses the number correctly.
        if (number == randomNumber) {
            guessLimit = 0; // set guessLimit = 0 to escape the loop.
            console.log(`You won, the guessed number (${number}) is correct.`);
        }

        if (number > (randomNumber * 2))
            console.log("Your guess is too high");
        if (number < (randomNumber / 2))
            console.log("Your guess is too low");
        if (guessLimit > 0)
            console.log(`You have ${guessLimit} guesses left.`);
        else
            console.log("You are out of guess. Bye!");
    } while (number != randomNumber && guessLimit > 0);
}

//export the function, so we can call it in app.js
module.exports = {
    GuessNumber
};