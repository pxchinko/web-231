/*
============================================
; Title:  Exercise-6.1a.js
; Author: Sarah Massie
; Date:   30 June 2020
; Description: Demonstrates an object with several properties and nesting object literals
;===========================================
*/

// header
const header = require('./Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Exercise 6.1a"));
  console.log("");

// Creating an object - person
// Two error below
var person = { // curly brackets because it's an object, not an array of objects
    firstName: "Karina",
    lastName: "Alvarez", // missing the comma after the string
    age: 30,
    passions: "baking and homeschooling"
};
  
  // Output
  // changed LastName to lastName so the property names would match
  console.log( 'I\'m ' + person.firstName + ' ' + person.lastName +' and I\'m ' + person.age + ' years old.');
  console.log('Two things I love doing are ' + person.passions + '.');