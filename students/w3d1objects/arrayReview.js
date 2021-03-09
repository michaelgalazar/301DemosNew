"use strict";

exports.findMin = findMin;
exports.sumOddIndicesValues = sumOddIndicesValues;
exports.sumArrays = sumArrays;



/* destructive array methods:
push pop shift splice reverse sort

safe: concat join forEach slice 
*/


/*
2.	Write a function findMin that takes an array as a parameter and returns the minimum value. 
Use a for .. of loop.  
*/

/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {number} min
 */
function findMin(arr) {
    let min = Infinity;
    for (const element of arr) {
        if (element < min) {
            min = element;
        }
    }
    return min;
}

/*
3.	Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum of values on the odd indices.  
*/
/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {number} sum of odd indices
 */
function sumOddIndicesValues(arr) {
    let sumOdd = 0;

}

/*
4.	Write a function sumArrays, that takes two arrays as parameters (you can assume of same length) then returns a 
new array by adding two array values at the corresponding indices. 
*/
/* eslint-disable */
/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 */
function sumArray(arr1, arr2) {
    let sumArray = [];

    for (let i = 0; i < arr1.length; i++) {
        sumArray[i] = arr1[i] + arr2[i];
    }
    return sumArray;
}





