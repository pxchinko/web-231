/*
============================================
; Title:  Massie-Exercise-3.2.js
; Author: Professor Krasso
; Date:   12 June 2020
; Modified By: Sarah Massie
; Description: Matching functions exercise
;===========================================
*/

// header
const header = require('./Massie-header.js');
console.log(header.display("Sarah", "Massie", "Exercise 3.2.js"));

var test1 = "Truck"
var test2 = "Car"
var test3 = "Bike"
var test4 = "Bike"
var test5 = "Four"
var test6 = "Three"

// functions
function match(string1, string2) {
  if (string1 === string2){
    return true; }
  else {
    return false;
  }
}

function logMismatch(string1, string2) {
  console.log(string1 + " and " + string2 + " do not match!");
}

function logMatch(string1, string2) {
 console.log(string1 + " and " + string2 + " do match!");
}

// output from the match() function
console.log(match("A", "B"));
console.log(match(2, 2));

// Conditional if... else statements including 6 variables
if (match(test1,test2)) {
  logMatch(test1, test2); }
else {
  logMismatch(test1, test2);
}

if (match(test3,test4)) {
  logMatch(test3, test4); }
else {
  logMismatch(test3, test4);
}

if (match(test5,test6)) {
  logMatch(test5, test6); }
else {
  logMismatch(test5, test6);
}