"use strict";
/* eslint-disable */

let arr = [1, 2, 3];
console.log( arr ); // 1,2,3
console.log( arr.toString() === "1,2,3" );


let fruits = ["Apple", "Orange", "Pear"];
console.log( fruits.shift() ); // remove Apple and alert it
console.log( fruits ); // Orange, Pear


let fruits2 = ["Orange", "Pear"];
fruits2.unshift('Apple');
console.log( fruits2 ); // Apple, Orange, Pear

let fruits3 = ["Apple", "Orange", "Pear"];
console.log( fruits3.pop() ); // remove "Pear" and alert it
console.log( fruits3 ); // Apple, Orange


let fruits4 = ["Apple", "Orange"];
fruits4.push("Pear");
console.log( fruits4 ); // Apple, Orange, Pear
