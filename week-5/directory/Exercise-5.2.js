/*
============================================
; Title:  Exercise-5.2.js
; Author: Sarah Massie
; Date:   24 June 2020
; Description: Demonstrates a quick list of foods
;===========================================
*/

// header
const header = require('./Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Exercise 5.2"));

  // array of food
const food = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

// output
console.log("")

food.forEach((dish) => {
  console.log(dish)
})