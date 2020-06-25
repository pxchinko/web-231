/*
============================================
; Title:  Exercise-5.3.js
; Author: Sarah Massie
; Date:   24 June 2020
; Description: Demonstrates a collection of information in a list
;===========================================
*/

// header
const header = require('./Massie-header.js');
  console.log(header.display("Sarah", "Massie", "Exercise 5.3"));

// object collection
const famousComposer = [
{
    firstName: "Ludwig",
    lastName: "Beethoven",
    genre: "Classical",
    rating: "9"
  },
  {
    firstName: "Wolfgang",
    lastName: "Mozart",
    genre: "Classical",
    rating: "6"
  },
  {
    firstName: "Johann",
    lastName: "Bach",
    genre: "Classical",
    rating: "4"
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: "7"
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: "8"
  }
  ]
  
  // output
  console.log("\n" + "-- FAMOUS COMPOSERS --" + "\n")
famousComposer.forEach( (composer) => {
  console.log("Last Name: " + composer.lastName + ", " + "Genre: " + composer.genre + ", " + "Rating: " + composer.rating)
})
