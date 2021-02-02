"use strict"

const initialUserAccountInfo = require('./account');
const indexATM = require('./index');
const prompt = require('prompt-sync')();

let accountBalance = initialUserAccountInfo.balance;


function userAttemptedPin() {
    console.log("What is your pin? Type only a four digit numerical value.");
    let userResponseAnswer = prompt();
    let userResponseNumber = parseInt(userResponseAnswer);

    if(userResponseNumber === initialUserAccountInfo.userPin) {
        console.log("Welcome! Please choose what you would like to do on the following menu!");
    } else {
        console.log("Your input is invalid. Please try again!");
        userAttemptedPin();
    }
}

function get_Balance() {
    console.log("Your current balance is $" + accountBalance);
    indexATM.atmMenu;
}

function make_deposit(){
    console.log("How much would you like to deposit?");
    let depositAnswer = prompt();
    let depositNumber = parseFloat(depositAnswer);

    if(isNaN(depositNumber) || depositNumber === "") {
        console.log("Invalid! Please enter a number!");
        indexATM.make_deposit;
    } else {
        accountBalance += depositNumber;
        indexATM.get_Balance;
    }
}

function make_withdraw() {
    console.log("How much would you like to withdraw?");
    let withdrawAnswer = prompt();
    let withdrawNumber = parseFloat(withdrawAnswer);

    if(isNaN(withdrawNumber) || withdrawNumber === "") {
        console.log("Invalid! Please enter a number!");//create a comment for this console log "error 6"
        indexATM.make_withdraw;
    } else {
        accountBalance -= withdrawNumber;
        indexATM.get_Balance;
    }
}

function error(){
    console.log("Invalid! Accepted values are numbers 1 through 4.");
    indexATM.atmMenu;
}

function exit() {
    console.log("You have selected to exit. Are you sure? Enter 'yes' or 'no'.");
    let userExitConfirm = prompt();

    if(userExitConfirm === "yes") {
        console.log("Have a great day!");
    } else {
        console.log("We entered the else condition");
        indexATM.atmMenu;
    }
}

function atmMenu (){
    console.log("Select a choice:\n 1) Balance\n 2) Deposit\n 3) Withdraw\n 4) Exit");
    let userInput = prompt();
    let userInputNumber = parseInt(userInput);

    if(userInputNumber === 1) {
        get_Balance();
    } else if (userInputNumber === 2) {
        make_deposit();
    } else if (userInputNumber === 3) {
        make_withdraw();
    } else if (userInputNumber === 4) {
        exit();
    } else {
        error();
    }
}


module.exports.userAttemptedPin = userAttemptedPin();
module.exports.atmMenu = atmMenu(); 
