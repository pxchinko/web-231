
/*
 	============================================
 	; Title: barleta-findErrors.js
 	; Author: Marie Nicole Barleta
 	; Date: 25 June 2020
 	; Modified By:
 	; Description: Find errors advanced arrays
 	;===========================================
 	*/
 	 
 	// import statement
 	var header = require('./Massie-header.js');
 	console.log(header.display("Sarah", "Massie", "Discussion 5.1"));
 	console.log("\n")
 	 
 	/*Expected output:
 	Do
 	Re
 	Mi
 	Fa
 	So
 	La
 	Ti
 	Do
 	*/
 	 
 	//Code has multiple errors
 	let chords = new Map();
 	 
 	chords.set('C', 'Do' )
 	chords.set('D', 'Re' )
 	chords.set('E', 'Mi' )
 	chords.set('F', 'Fa' )
 	chords.set('G', 'So' )
 	chords.set('A', 'La' )
 	chords.set('B', 'Ti' )
 	 
 	for (let [key, value] of chords){
	console.log(value); // removed console.log(key) and console.log(key, value) to only output the notes, not the chords
	 }
	 
	console.log(chords.get("C")); // deleted "key" so it wouldn't confuse the output since key is now not defined
	// deleted the console.log(chords.get('Do')) since the value is undefined