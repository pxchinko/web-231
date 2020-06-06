/*
============================================
; Title:  Massie-function-properties.js
; Author: Professor Krasso
; Date:   5 June 2020
; Modified By: Sarah Massie
; Description: Demonstrates how to define and call function properties
;===========================================
*/

// variables
myName.sarah = "Sarah";

// function
function myName() {
 return myName.sarah;
}

// displaying myHeader
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
    new Date().toLocaleDateString('en-US')

	return output
}
const header = require('./Massie-header.js');

// output
console.log(header.display("Sarah", "Massie", "Massie-function-properties.js")); // displays header
console.log("Hello " + myName() + " Massie!"); // displays greeting to viewer

