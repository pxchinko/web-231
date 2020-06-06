/*
============================================
; Title:  Massie-header-test.js
; Author: Professor Krasso
; Date:   5 June 2020
; Modified By: Sarah Massie
; Description: Displays name, date, temperature, and savings account goal
;===========================================
*/
/*

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/

// header
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' + 
    new Date().toLocaleDateString('en-US')

  return output  
} 
const header = require('./Massie-header.js');

/**
 * Params: firstName, lastName
 * Response: Hello my name is firstName + lastName
 * Description: returns the fullName
 */
function fullName(firstName, lastName) {
  var firstName = "Sarah";
  var lastName = " Massie";
  return fullName = firstName + lastName; // returns firstName and lastName
}

/**
 * Params: year, month, day
 * Response: function property value
 * Description: returns the fullName
 */
function dateWriter(year, month, day) {
  var year = 2020;  // year is 2020
  var month = 5;  // month is June
  var day = 5;  // day is fifth
  return dateWriter = new Date(year, month, day);
}

/**
 * Params: number, numOfFixedPositions
 * Response: function property value
 * Description: returns number of fixed positions for previous date
 */
function formatNumber(number, numOfFixedPositions) {
  number = 33.6; // temperature is 33.6;
  numOfFixedPositions = 1; // one decimal place allowed
  return formatNumber = number.toFixed(numOfFixedPositions);
}

/**
 * Params: text
 * Response: function property value
 * Description: converts string into an integer
 */

function convertToInt(text) {
  var text = '23years'; // string is 23 years and will convert to integer
  return convertToInt = parseInt(text, 10);
}

/**
 * Params: text
 * Response: function property value
 * Description: converts string into an integer
 */

function convertToFloat(text) {
  var text = '120000000000 million dollars'; // string is 12000000000 million dollars and will convert to floating object
  return convertToFloat = parseFloat(text);
}

// output
console.log(header.display("Sarah", "Massie", "Assignment 2.4"));
// new line
console.log('Hello my name is ' + fullName() + '!');
// new line
console.log('Today\'s date is ' + dateWriter() + ' and the current temperature is ' + formatNumber() + ' degrees.');
// new line
console.log('I am ' + convertToInt() + ' years old and my savings account goal is ' + convertToFloat() + ' dollars.');