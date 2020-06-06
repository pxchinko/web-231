/*
============================================
; Title:  Massie-header-test.js
; Author: Professor Krasso 
; Date:   5 June 2020
; Modified By: Sarah Massie
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/

exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' + 
    new Date().toLocaleDateString('en-US')

  return output  
} 
const header = require('./Massie-header.js');

console.log(header.display("Sarah", "Massie", "Massie-header-test.js"));