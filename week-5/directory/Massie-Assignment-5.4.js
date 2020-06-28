/*
============================================
; Title:  Assignment-5.4.js
; Author: Professor Krasso
; Date:   25 June 2020
; Modified by: Sarah Massie
; Description: Filtering two arrays
;===========================================
*/

//header
const header = require('./Massie-header.js')
console.log(header.display('Sarah','Massie','Massie-Assignment-5.4'))
console.log('\n')

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

// filtering by genre
let genres = famousComposer.map((composer) => {
    return [composer.genre, composer.lastName];
})

// filtering by rating
let ratings = famousComposer.map((composer) => {
    return [composer.rating, composer.lastName]
})

console.log("-- COMPOSER BY RATING --")
ratings.forEach( function (composer) {
    console.log("Rating: " + composer[0] + '\n' + "Composer: " + composer[1] + '\n')
})

console.log("-- COMPOSER BY GENRE --")
genres.forEach( function (composer) {
    console.log("Genre: " + composer[0] + '\n' + "Composer: " + composer[1] + "\n");
})