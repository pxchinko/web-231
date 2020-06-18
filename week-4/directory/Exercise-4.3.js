/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

/*
============================================
; Title: Exercise-4.3.js
; Author: Professor Krasso
; Date: 17 June 2020
; Modified By: Sarah Massie
; Description: Printing and selecting from an array
;===========================================
*/

// header
const header = require('./Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Exercise 4.3"));

console.log("")

var vehicle = ["Truck", "Car", "Airplane", "Bus", "Motorcycle"];

// function
function getValue(array, string) {
  for (var v = 0; v < array.length; ++v)
  { if (array[v] === string)
      console.log(array[v]);
}
}

// output to display all array items
console.log("-- DISPLAYING ARRAY ITEMS --")
for (var x = 0; x < vehicle.length; ++x) {
  console.log(vehicle[x]);
}

console.log("")

// output to select "Motorcycle" from array
console.log("-- SELECTED VALUE --");
getValue(vehicle, "Motorcycle");

console.log("")

// output to select "Bus" from array
console.log("-- SELECTED VALUE --");
getValue(vehicle, "Bus");