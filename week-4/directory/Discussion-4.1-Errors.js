/*
============================================
; Title:  Discussion-4.1-Errors.js
; Author: Sarah Massie
; Date:   17 June 2020
; Modified by: 
; Description: Program using an array with four errors
;===========================================
*/

//header
const header = require('./Massie-header.js')
console.log(header.display('Sarah','Massie','Discussion 4.1'))

//program with four errors
var vehicles = ["Chevrolet Spark", "Fiat 500", "Nissan Leaf", "Volkswagen Beetle", "Honda Fit"]  

function getCuteCar(array, string) {
  for (var v = 0; v < array.length; v++)
  { if (array[v] === string)
      console.log(array[v]);
  }
}

for (var x = 0; x < vehicles.length; x++) {
  console.log(vehicles[v]) ;
  console.log("Which is the cutest small car?");
}

getCuteCar(vehicles, "Volkswagen Beetle");

// expected output
/* Which is the cutest small car? 
   Volkswagen Beetle. */