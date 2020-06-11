
/*=======================================
; Title: Discussion Board 3.1
; Author: Professor Krasso
; Date: 10 June 2020
; Modify by: Sarah Massie
; Description: Javascript program using an if else statement with 2 errors.
=======================================*/

const score >= 70;  // Score
var msg;            // Message

function congratulate() {
  msg = 'Congratulations!';
}

function disappointment() {
  msg ='Sorry.';
}

if (score >= 70) {      // If score is 50 or higher
  congratulate();
  msg += ' Proceed to next round.';
} else (score <= 70) {  // If score is less than 50
  disappointment();
  msg += ' Try that again.';
}

console.log(msg);