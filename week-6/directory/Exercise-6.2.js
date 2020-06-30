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
  var text = "goodbye";
  
  if (text !== 'hello')
  throw ("Oops, you didn't type hello");
  console.log(text);
} 
catch (err) {
  console.log("Catch clause: " + err);
} 
finally {
  console.log("Finally clause reached...");
}