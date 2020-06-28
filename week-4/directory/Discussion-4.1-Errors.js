/* ============================================
; Title: Assignment 5.1 Advanced Arrays
; Author: Wendy Leon
; Date: 24 June 2020
; Modified By: Sarah Massie
; Description: Advanced Arrays
;=========================================== */

// header
var header = require('./Massie-header.js');
console.log(header.display("Sarah", "Massie", "Exercise 5.1 - Advanced Arrays"));
console.log('\n');

// creating a map object
let animalEat = new Map();
// adding keys and values to a map object
  // for the three variables below, I made it so all string values were in apostrophes and therefore read as strings
animalEat.set('cow', 'grass');
animalEat.set('squirrel', 'nuts');
animalEat.set('monkey' , 'bananas');
// displaying the keys and values of the map object
for (let [key, value] of animalEat){
  console.log('The ' + key + ' eats ' + value + '.');
}

//displaying the size of the map object
console.log(animalEat.size); // equal sign replaced with a period
//displaying the value of a key in the map object
console.log(animalEat.get('cow'));
//displaying the value of a key in the map object
console.log(animalEat.has('frog'));
// deleting the value of the cow key in the map object
console.log(animalEat.delete('cow'));
// emptying the map object
console.log(animalEat.clear());
//displaying the size of the map object
console.log(animalEat.size);