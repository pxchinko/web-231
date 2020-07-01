/*
============================================
; Title:  Exercise-6.1.js
; Author: Sarah Massie
; Date:   30 June 2020
; Description: Includes two errors.
;===========================================
*/

// header
const header = require('./Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Exercise 6.1"));
  console.log("");

var doll = {
    firstName: "Polly",
    lastName: "Pocket",
    size: "small",
    year: new Date(1989),
    fullName: function() {
        return firstName + lastName;
    }
}

// output
console.log(doll.fullName + " is a " + doll.size + " doll from the year " + doll.year + "." )
// Polly Pocket is a small doll from the year 1989.