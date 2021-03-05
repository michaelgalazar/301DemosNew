"use strict";

exports.addends = addends;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.matrixAddition = matrixAddition;


/* 1.	Write a function addend(arr) that accepts an array of numbers as parameters and returns the sum of first and last elements of the array. */
/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {number} sum of first and last elements
 */
function addends(arr){
    return arr[0] + arr[arr.length - 1];
}

/* 2.	Write a function named getMiddle that returns the value of the middle element in an array. If 
the array has an even number of elements, then this function must return the average of the two middle elements. */
/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {number}  middle element or average
 */
function getMiddle(arr){
    if (arr.length % 2 === 0) {
        //even number of elements
        const middleLower = arr[arr.length/2 - 1];
        const middleUpper = arr[arr.length/2];
        const average = (middleLower + middleUpper)/2;
        return average;
    } else {
        return arr[(arr.length - 1)/2];
    }
}

/* 3.	Write a function to rotate the elements in an array to the left by 1. */
/**
 * @param {Array} arr is any array
 * @returns {Array} arr with each element rotated 1 element to left
 */
function rotateLeft(arr) {
    let newArr = [];
    for (let index = 1;  index < arr.length; index += 1){
        newArr[index - 1] = arr[index];
    }
    newArr[arr.length - 1] = arr[0];
    return newArr;
}

/* 4.	Write a function to rotate the elements in an array to the right by 1. */
/**
 * @param {Array} arr is any array
 * @returns {Array} arr with each element rotated 1 element to right
 */
function rotateRight(arr) {
    let newArr = [];
    for (let index = 1;  index < arr.length ; index += 1){
        newArr[index] = arr[index - 1];
    }
    newArr[0] = arr[arr.length - 1];
    return newArr;
}

/**
 * 
 * @param {Array} a is first array of numbers
 * @param {Array} b is second array of numbers
 * @returns {Array} with the array addition of the two arrays
 */
function matrixAddition(a,b){
    let resultMatrix = [];
    for(let i=0;i<a.length; i++){
        let row =[];
        for(let j=0; j<a[i].length; j++){
            row.push(a[i][j]+b[i][j]);
        }
        resultMatrix.push(row);
    }
    return resultMatrix;
}


/*
    const result = source.splice(index, 0, ...insert);
    console.log (source);
    return source;
    */