/*
============================================
; Title: Exercise-4.2.js
; Author: Professor Krasso
; Date: 17 June 2020
; Modified By: Sarah Massie
; Description: Printing an array of fruits
;===========================================
*/

// header
const header = require('./Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Exercise 4.2"));

var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function
function getFruit(array) {
  for (var f = 0; f < array.length; ++f)
  { console.log(array[f]);
}
}

getFruit(fruits);