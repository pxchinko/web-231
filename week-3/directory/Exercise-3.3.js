/*
============================================
; Title:  exercise-3.3.js
; Author: Professor Krasso
; Date:   12 June 2020
; Modified By: Sarah Massie
; Description: practicing switch function
;===========================================
*/
// header
const header = require('./Massie-header.js');
console.log(header.display("Sarah", "Massie", "Exercise 3.2.js"));

let eventKeyCode = 13

switch(eventKeyCode) {
case 13:
  console.log('The enter key was pressed.');
  break;
case 16:
  console.log('The shift key was pressed.');
  break;
case 32:
  console.log('The spacebar key was pressed.');
  break;
case 8:
  console.log('The backspace / delete key was pressed.');
  break;
case 0:
  console.log('Unrecognized key.')
}
