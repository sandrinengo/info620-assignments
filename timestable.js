const express = require("express");
const app = express();
const readlineSync = require("readline-sync");

function CalculateTimesTable() {
    console.log("Enter any number between 1 and 10.");
    let rows = columns = PromptUntilValid();
    let timesTable = []; //initiate the array.

    //create the matrix for the Times Table
    for (i = 1; i <= rows; i++) {
        let row = [];
        for (j = 1; j <= columns; j++) {
            row.push(j * i); //create a result of the multiplication
        }
        timesTable.push(row);
    }

    //display the array elements by its index.
    for (m = 0; m < timesTable.length; m++) {
        console.log(timesTable[m]);
    }
}

function PromptUntilValid() {
    let number;
    let command;
    do {
        number = readlineSync.questionInt(command);
        command = "=> Enter again: ";
    } while (number < 1 || number > 10);

    return number;
}

app.listen("3000",()=>{
    CalculateTimesTable();
    console.log("press CTRL + C to escape.");
});
