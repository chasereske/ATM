"use strict"

 const prompt = require('prompt-sync')()

 const userOptions = require('./atm')

 console.log("What is your pin number?");

 let userAttemptedPin = prompt().parseINT;

 userOptions.validatePin(userAttemptedPin);

 module.exports.userAttemptedPin = userAttemptedPin;


