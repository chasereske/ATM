"use strict"

const initialUserAccountInfo = require('./account');
const prompt = require('prompt-sync')();

let userResponse;

function userAttemptedPin () {
    userResponse = prompt().parseINT;
}

function validatePin() {
    if(userResponse === initialUserAccountInfo.userPin) {
        userMenu();
    } else {
        console.log("That was incorrect. Please try again.");
        console.log(userInput.userAttemptedPin);
        userInput.userAttemptedPin; 
    }

}

function userMenu() { 
    function getBalance() {

    }

    function withdraw() {

    }

    function deposit() {

    }
}

module.exports.validatePin = validatePin;
module.exports.userMenu = userMenu;