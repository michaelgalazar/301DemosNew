
"use strict";

/* eslint-disable */

// for (let i = 0; i < "Hello".length; i++) {
// console.log("Hello"[i]); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
// }

/*
Write a program that keeps on asking for user input and prints it, until user types the word "stop" (without quotes). "Stop" word can be in any case (small, capital or mixed)
Write a function that takes a comma separated string of words and 
converts it into an array of words and prints in reverse order.
Write a function to replace the first occurrence of "for" in an input string with 4.
*/
// const  prompt = require("prompt-sync")();
// let input;
// do {
//     input = prompt("say something");
//     input = input.toLowerCase();
// } while (input !== "stop");

/*
Write a function that takes a comma separated string of words and 
converts it into an array of words and prints in reverse order.
*/
function reverseStringWords(str){
    const wordArray = str.split(",");
    wordArray.reverse();
    for (const word of wordArray){
        console.log(word);
    }
}
console.log(reverseStringWords("Today,is,hot!!"));

//Write a function to replace the first occurrence of "for" in an input string with 4.
function replace4(str){

    const findex = str.indexOf("for");
    const substring1 = str.substr(0, findex);
    const substring2 = str.substr(findex + 3, str.length-1);

    return substring1 + 4 + substring2;
}

const testStr = "find the first for in this for string";
console.log(replace4(testStr));
