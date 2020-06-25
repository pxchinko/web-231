/*
============================================
; Title:  Discussion-5.1-Errors.js
; Author: Sarah Massie
; Date:   24 June 2020
; Modified by: 
; Description: Program using a list with three errors
;===========================================
*/

//header
const header = require('./Massie-header.js')
console.log(header.display('Sarah','Massie','Discussion 5.1'))

//program with four errors
const vehicles = [
{
  make: "Volkswagen",
  model: "Beetle"
},
{
  make: "Chevrolet",
  model: "Spark"
}
{   
  make: "Honda",
  model: "Fit"
};
{
  make: "Nissan",
  model: "Leaf"
},
  make: "Fiat",
  model: "500"
]

// output
console.log("\n" + "-- CUTE CARS --" + "\n")
let index = 1
vehicles.forEach((car) => {
  console.log(index + ". " + car.make + " " + car.model)
  index++
}

 /* expected output
 
-- CUTE CARS --

1. Volkswagen Beetle
2. Chevrolet Spark
3. Honda Fit
4. Nissan Leaf
5. Fiat 500

*/