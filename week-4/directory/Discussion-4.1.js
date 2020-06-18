/*
============================================
; Title:  Discussion-4.1.js
; Author: Brooklyn Hairston
; Date:   17 June 2020
; Modified by: Sarah Massie
; Description: program using an array with two errors
;===========================================
*/

//header
const header = require('./Massie-header.js')
console.log(header.display('Sarah','Massie','Discussion 4.1'))

//program with two errors

var Books = ["Howl's Moving Castle", "Good Omens", "Fire", "Ella Enchanted", "The Song of Achilles", "Pride and Prejudice"]  
// brackets needed to declare an array

for (let x = 3; x < 4; x++) {   // semicolon needed between each statement to execute
  console.log("My favorite book is " + Books[x] + ".");
}

// expected output
/* My favorite book is Ella Enchanted. */