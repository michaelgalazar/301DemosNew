"use strict";

let arr = [1, 0, false];

console.log( arr.indexOf(0) ); // 1
console.log(arr.indexOf(10)); // -1
console.log( arr.lastIndexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1

console.log( arr.includes(1) ); // true
console.log( arr.includes(10) ); // false