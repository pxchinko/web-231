/*
============================================
; Title:  Exercise-5.2.js
; Author: Sarah Massie
; Date:   29 June 2020
; Description: Demonstrates a quick error
;===========================================
*/

// header
const header = require('./Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Exercise 6.2"));
  console.log("");

try {
  var x = 5;
  var y = 7;
  var divided = x / y;

if (x => 9) throw "This input is invalid.";
if (x <= 9) throw "This input is valid."
  console.log(divided);
} 
catch (err) {
  console.log("Catch clause: " + err);
} 
finally {
  console.log("Finally clause reached...");
}