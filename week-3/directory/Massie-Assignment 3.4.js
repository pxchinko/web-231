/*
============================================
; Title:  Massie-Assignment 3.4.js
; Author: Professor Krasso
; Date:   12 June 2020
; Modified By: Sarah Massie
; Description: Matching a variable with a random number 10 times
;===========================================
*/

// header
const header = require('./Massie-header.js');
console.log(header.display("Sarah", "Massie", "Massie-Assignment 3.4.js"));

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// functions
function match(guess, localVar) {
  if (guess === localVar){
    return true; }
  else {
    return false;
  }
}
  
function logMismatch(guess, localVar) {
  console.log(guess + " does not match " + localVar + "!");
}
  
function logMatch(guess, localVar) {
 console.log(guess + " does match " + localVar + "!");
}

/**
 * Params: guess, localVar
 * Response: integer value
 * Description: Matches an integer value with a random value
 */

var guess = 5; // variable for the function will be 5
for (x = 0; x < 10; x++) { // function will run 10 times
  var localVar = randomNumber();

  if (match(guess, localVar))
    logMatch(guess, localVar);
  else {
    logMismatch(guess, localVar);
  }
}