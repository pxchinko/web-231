/*
============================================
; Title: Assignment-4.4.js
; Author: Professor Krasso
; Date: 20 June 2020
; Modified By: Sarah Massie
; Description: Filtering an array to find a specific output
;===========================================
*/

// header
const header = require('./Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Assignment 4.4"));


// array  
const states = ["California", "Alabama", "Nebraska", "Iowa", "Nevada"]; 

function getState(stateValue, filterValue) {
    if (stateValue === filterValue)
    return true;
}

// output to display original array
console.log("\n-- ORIGINAL ARRAY --")
for (let x = 0; x < states.length; x++) {
console.log(states[x]) }

// output to display alphabetized array
console.log("\n-- SORTED ARRAY --")
states.sort().forEach(states => console.log(states));

// output to display selected value
console.log('\n-- SELECTED VALUE --');
console.log(
  states.filter(
    function (stateValue) {
      return getState(stateValue, "Iowa") }
)[0]
);
