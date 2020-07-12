/*
============================================
; Title:  Exercise-7.2.js
; Author: Professor Krasso
; Date:   8 July 2020
; Modified by: Sarah Massie
; Description: Creating constructor functions
;===========================================
*/

//header
const header = require('./Massie-header.js')
console.log(header.display('Sarah','Massie','Massie-Assignment-5.4'))
console.log('')

// employee function
function Employee(id, first, last, title) {
  this.idNumber = id;
  this.firstName = first;
  this.lastName = last;
  this.title = title;
  }

var employees = [
  new Employee(1, "Thomas", "Edison", "Software Engineer"),
  new Employee(2, "Benjamin", "Franklin", "Programmer"),
  new Employee(3, "Nikolai", "Tesla", "Project Manager"),
  new Employee(4, "Charles", "Babbage", "Product Manager"),
  new Employee(5, "Alexander", "Bell", "Business Analyst"),
];

// output
employees.forEach( (employees) => {
  console.log(employees.idNumber + " " + employees.firstName + " " + employees.lastName + " " + employees.title)
})