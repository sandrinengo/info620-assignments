const express = require("express");
const debug = require("debug")("app");
const app = express();

const predicter = require("./src/js/predicter");
const leapyear = require("./src/js/leapyear");
const guessnumber = require("./src/js/guessnumber");
const timesTable = require("./src/js/timestable");

//predicter.PredictPopulation();
//leapyear.GetFebLastDay();
guessnumber.GuessNumber();
//timesTable.CalculateTimesTable();

app.listen("3000",()=>{
    console.log("press CTRL + C to escape.");
});
