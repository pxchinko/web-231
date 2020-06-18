/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
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