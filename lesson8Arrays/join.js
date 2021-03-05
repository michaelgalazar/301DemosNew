"use strict";
/* eslint-disable */

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(); // glue the array into a string using ,

console.log(str); // Bilbo,Gandalf,Nazgul

str = arr.join("-");

console.log(str); //Bilbo-Gandalf-Nazgul


function invert(arr, separator = " "){
    const reversed = arr.reverse();
    const newString = reversed.join(separator);
    console.log(newString);
}

const myArray = ["Sam", "am", "I"];
console.log(invert(myArray, "<<<>>>"));
console.log(invert(myArray ));

