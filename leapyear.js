const express = require("express");
const app = express();
const readlineSync = require("readline-sync");

function GetFebLastDay() {
    try {
        let year = PromptUntilValid("Enter a Year: ");
        //we look for century year
        //eg, (2023/100) = roundup is 20, century 20th * 100 to find beginning year of that century.
        let centuryYear = Math.ceil(year / 100) * 100;
        /** the condition of leap year is
         * 1. year entered divisible by 4 and not a century year
         * 2. or if that a century year, divided by 400 and the remainder is 0
         */
        let isLeap = (year % 4 == 0 && (year != centuryYear)) || ((year == centuryYear) && centuryYear % 400 == 0);
        if (isLeap) {
            console.log(29);
            return;
        }
        console.log(28);
    }
    catch (ex) {
        console.log(ex);
    }
}

function PromptUntilValid(command) {
    let number;
    //if user enters a number less than or equal to 0, ask them to enter again.
    //there is no Year Zero
    do {
        number = readlineSync.questionInt(command);
        //change verbiage
        command = "=> Year cannot be negative or zero. Enter again: ";
    } while (number <= 0);

    return number;
}

app.listen("3000",()=>{
    GetFebLastDay();
    console.log("press CTRL + C to escape.");
});
