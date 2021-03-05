"use strict";

/* Write a function, invert, that will reverse an array and output the
 reversed elements as a string with an optional separator.

 invert(myArray, “<<>>”)   “I<<>>am<<>>Sam”
Or
invert(myArray) 
*/

/**
 * 
 * @param {*} arr is an array
 * @param {*} separator optoinal 
 * @returns {string} a string 
 */
function invert(arr, separator = " "){
    const reversed = arr.reverse();
    const joined = reversed.join(separator);
    return joined;

}

const myArray = [ 'hi', 'bye'];
const result = invert(myArray );

console.log(result);
