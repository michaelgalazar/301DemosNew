"use strict";
exports.isArrayEqual = isArrayEqual;
exports.reverse2String = reverse2String;
exports.isPalindrome = isPalindrome;
exports.enhancedIncludes = enhancedIncludes;
exports.ssReverse = ssReverse;
exports.merge = merge;
/* 1.	Write a function, isArrayEqual, that returns true if two arrays have === elements, else false; */
/**
 * 
 * @param {Array} arr1 array one
 * @param {Array} arr2 array two
 * @returns {boolean} returns true or false
 */
function isArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

/* 2.	Write a function that checks if an array is palindrome by using push and pop array methods to reverse the 
// array and then isArrayEqual method you wrote for 1.  */
/**
 * 
 * @param {Array} arr is the array to be checked if it palindromr or not
 * @returns {boolean} returns true if it is palindrome or false if it is not 
 */
function isPalindrome(arr) {
    let orginal = arr.slice();
    let arr1 = [];
    for (let i = arr.length; i > 0; i--) {
        arr1.push(arr.pop());
    }
    let result = isArrayEqual(orginal, arr1);
    return result;
}

// 3.Write a function, reverse2String,  that transforms a given array as following. Use appropriate array methods.
/**
 * 
 * @param {Array} arr array  
 * @returns {String} string of the concatinate array
 */
function reverse2String(arr) {
    let str = " ";
    arr.reverse(2);
    str = arr.join("_");
    return str;
}

/* 4. Write a JavaScript function named enhancedIncludes that takes two parameters, an array,
      and a value to search in the array and return an array result with three values.
*/
/**
 * 
 * @param {Array} arr input array
 * @param {number} value the value we will find in the array
 * @returns{Array} array which contains 3 values boolean and the to the index of the value found
 */
function enhancedIncludes(arr, value) {
    let outPutArray = [];
    if (arr.find(item => item === value) === undefined) {
        outPutArray.push(false, -1, -1);
    } else {
        let outPut = true;
        let frontIndex = arr.indexOf(value);
        let lastIndex = arr.lastIndexOf(value);
        if (frontIndex === lastIndex) {
            outPutArray.push(outPut, frontIndex, -1);
        } else
            outPutArray.push(outPut, frontIndex, lastIndex);
    }
    return outPutArray;
}

/* 5. Write a function, ssReverse, that returns reversed copy of a given array (original array should remain intact). 
     Do this without using reverse method, instead use splice and slice methods.*/
/**
 * 
 * @param {Array} arr input array to be reveresed
 * @returns {Array} reversedArray te reversed array using splice and slice 
 */
function ssReverse(arr) {
    let copyArr = arr.slice();
    for (let i = arr.length - 1; i >= 0; i--) {
        copyArr.splice(copyArr.length - 1 - i, 1, arr[i]);
    }
    return copyArr;
}

/*   6. (EC) Write a function that merges two sorted arrays into one single sorted array. Make use of shift and push array methods. */
/**
 * @param {Array} arr1 sorted array
 * @param {Array} arr2 sorted array
 * @returns {Array} returns merged array of the firstArray and secondArray
 */
function merge(arr1, arr2) {
    const arr = [];
 
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            arr.push(arr1.shift());
        } else {
            arr.push(arr2.shift());
        }
    }
    return [...arr, ...arr1, ...arr2];
 }