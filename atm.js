"use strict"

const initialUserAccountInfo = require('./account');
const prompt = require('prompt-sync')();

let userResponse = userAttemptedPin();

function userAttemptedPin () {
    userResponse = prompt().parseINT;
    return userResponse;
}

function validatePin() {
    if(userResponse === initialUserAccountInfo.userPin) {
        userMenu();
    } else {
        console.log("That was incorrect. Please try again.");
        userAttemptedPin();
    }
}

function userMenu() { 
    function getBalance() {
        let currentBalance = initialUserAccountInfo.balance;
        console.log("Your current balance is " + currentBalance);
        
        console.log("Whould you like to make a withdraw? Only respond 'yes' or 'no'.")
        let askUserWithdraw = prompt();

        if(askUserWithdraw === "yes") {
            withdraw();
        } else {
            console.log("Have a good day!");
        }
    }

    function withdraw() {
        
        console.log("How much would you like to withdrawal? Enter only a numerical value.");
        let askWithdrawalAmount = prompt()

        initialUserAccountInfo.balance -= askWithdrawalAmount; 

        console.log("Would you like to make another withdrawl? Only enter 'yes' or 'no'.");
        let anotherWithdrawl = prompt(); 

        if(anotherWithdrawl = 'yes') {

        } else {
            console.log("Would you like to make a deposit? Only enter 'yes' or 'no'.");
            let askAboutDeposit = prompt();

            if(askAboutDeposit === 'yes' ){
                deposit();
            } else {
                console.log("Have a nice day!");
            }
        }

    }

    function deposit() {

        console.log("How much would you like to deposit? Enter only a numerical value.");
        let askDepositAmount = prompt()

        initialUserAccountInfo.balance += askDepositAmount; 

        console.log("Would you like to make another deposit? Only enter 'yes' or 'no'.");
        let anotherDeposit = prompt(); 

        if(anotherWithdrawl = 'yes') {

        } else {
            console.log("Have a great day!");
        }
    }
}

module.exports.validatePin = validatePin;
module.exports.userMenu = userMenu;