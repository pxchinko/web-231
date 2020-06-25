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
    make: "Volkswagen",
    model: "Golf"
};
{
    make: "Nissan",
    model: "Leaf"
},
    make: "Nissan",
    model: "Rogue"
]

 // return a new list of objects with only the lastName field
 let lastName = famousComposer.map((singer) => {
    return singer.lastName
  })