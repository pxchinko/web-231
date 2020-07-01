/*
============================================
; Title:  Massie-Assignment-6.4.js
; Author: Sarah Massie
; Date:   30 June 2020
; Description: Demonstrates an object with several properties and nesting object literals
;===========================================
*/

// header
const header = require('./Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Assignment 6.4"));
  console.log("");

var ticket = {
  id: 105,
  name: "Ticket",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: 5, 
 
  person: {
    id: 100,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I",
    fullName: function() { // created a function to make the bottom code cleaner
      return this.firstName + " " + this.lastName;
    } }
};

 
 console.log("Ticket " + ticket.id + 
" was created on " + ticket.dateCreated + 
" and assigned to employee " + ticket.person.fullName() + " (" + ticket.person.jobTitle + ")." );