<<<<<<< HEAD
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
const header = require('./Massie.js');

=======
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
const header = require('./Massie.js');

>>>>>>> bf9283215ff07b401138bb090fc34519cd82e4a0
console.log(header.display("Sarah", "Massie", "Massie-header-test.js"));