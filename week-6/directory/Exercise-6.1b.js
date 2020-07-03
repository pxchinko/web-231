/*
============================================
; Title: Exercise-6.1b.js
; Author: Devan Wong
; Date: 3 July 2020
; Modified By: Sarah Massie
; Description: Objects and built in objects [ 3 errors ]
;===========================================
*/

var topSecret = {
  firstName: 'Devan',
  lastName : 'Wong',
  birthday: 'November 7, 1990',
  get fullProfile() { // deleted the semicolon to turn it back into a function to get information
    return topSecret.firstName + ' ' + topSecret.lastName + ' ' + topSecret.birthday
}
}
Object.defineProperty(topSecret, 'SSN', { // topsecret to topSecret so parameter is correctly defined
  value: '123-234-1234',
  writable: false,
  configurable: true,
  enumerable: false // changed true to false so SSN cannot be written out
});

for (let value in topSecret) {
console.log(topSecret[value]);
}

//OUT THE SSN SHOULD NOT BE SHOWN.
//OUTPUT Devan Wong November 7, 1990