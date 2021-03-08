"use strict";

exports.isPalindrome = isPalindrome;
exports.merge = merge;
exports.shiftPush = shiftPush;
exports.mergeTwo = mergeTwo;
exports.enhancedIncludes = enhancedIncludes;
exports.reverse2String = reverse2String;
exports.ssReverse = ssReverse;
exports.isArrayEqual = isArrayEqual;



/* eslint-disable */

/* 1.	Write a function, isArrayEqual, that returns true if two arrays have === elements, else false; */
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

/* 	2.      Write a function that checks if an array is palindrome by using push and pop array methods.  */
function isPalindrome(arr) {
    const arrCopy = arr.slice();
    const reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArray.push(arrCopy.pop());
    }
    return isArrayEqual(arr, reversedArray);
}

function isPalindromeV1(arr) {
    const middleIndex = Math.floor((arr.length - 1) / 2);
    for (let i = 0; i <= middleIndex; i++) {
        if (arr[i] !== arr.pop()) {
            return false;
        }
    }
    return true;
}


/*
3.      Write a function that transforms a given array as following. Use appropriate array methods. 
Input (Array) 	Output (String) 
['Quick', 'Brown', 'Fox'] 	"Fox_Brown_Quick"  */
function reverse2String(arr) {
    let concatenation = "";
    while (arr.length > 0) {

        if (concatenation !== "") {
            concatenation += "_" + arr.pop();
        } else {
            concatenation = arr.pop();
        }

    }
    return concatenation;
}

function reverse2String(arr) {  //REDEF WITH MORE CONCISE CODE
    let reversed = arr.slice().reverse();
    return reversed.join("_");
}


const testConcat = ['Quick', 'Brown', 'Fox'];
//console.log(testConcat.pop() );
//console.log("should be Fox_Brown_Quick ", reverse2String(testConcat));

function shiftTest(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("i: ", i, " arr : ", arr);
        console.log("arr[i] : ", arr[i]);
        const shifted = arr.shift();
        console.log("shifted ", shifted);
    }
}

//shiftTest([1,2,3,4,5]);

/*
4.      Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and a value to search in the array and return an array result with three values.  
a.	First value is boolean representing if the search value exists in the array. 
b.	Second value is the first index of value found in the array or -1 
c.	Third value is the last index of value found in the array or -1. 
*/
function enhancedIncludes(arr, value) {
    const searchResults = [];
    let firstIndex = null;
    let lastIndex;
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            lastIndex = i;
            found = true;
            if (firstIndex === null) {
                firstIndex = i;
            }
        }
    }
    return [found, firstIndex, lastIndex];
}

function enhancedIncludes(arr, value) {  //REDEF WITH MORE CONCISE CODE
    const searchResults = [];

    searchResults.push(arr.includes(value));
    searchResults.push(arr.indexOf(value));
    searchResults.push(arr.lastIndexOf(value));

    return searchResults;

}


/* 5. Write a function, ssReverse, that returns reversed copy of a given array (original array should remain intact). Do this 
without using reverse method, instead use splice and slice methods.  
*/
function ssReverse(arr) {
    //make copy
    const copy = arr.slice();
    /* reverse copy by splicing the first element with the last, 2nd with 2nd to last etc to middle */
    const middleIndex = Math.floor((copy.length - 1) / 2);
    const lastIndex = arr.length - 1;
    for (let i = 0; i <= middleIndex; i++) {
        let front = copy.splice(i, 1, copy[lastIndex - i]);  //moves back element to front and returns front
        copy.splice(lastIndex - i, 1, front[0]); //puts the front one to the back
    }
    return copy;
}



/*   6.      Write a function that merges two sorted arrays into one single sorted array. Make use of shift and push array methods. */
/* process:  loop through all the elements of arr1 
  for each element of arr1, need to place it after any elements of arr2 that are smaller and remove those elements from arr2
    first find all arr2 elements less than element;  push them to the new array and shift them from arr2
    NOTE TO INSTRUCTOR:  This is a rather subtle problem.  Lots of solutions on Internet.  See MergeTwo below -- uses 2 indices
    mergeTwo is much better solution -- not destructive
*/
function merge(arr1, arr2) {

    const newArr = [];
    for (const element1 of arr1) {
        shiftPush(arr2, element1, newArr);
        newArr.push(element1);
    }
    /* now arr1 is finiehed, need to check for any remaing elements of arr2 and push them to end */
    for (const element2 of arr2) {
        newArr.push(element2);
    }
    return newArr;
}

/* shiftArray is a sorted array, take the elements in it that are less than target, and push them onto pushArray */
function shiftPush(shiftArray, target, addArray) {
    let count = 0;
    for (const element of shiftArray) {
        if (element < target) {
            addArray.push(element);
            count++;
        } else {
            break;
        }
    }
    /* now need to shift those elements out of shift array */
    for (let i = 1; i <= count; i++) {
        shiftArray.shift();
    }
    return addArray;
}

/* clone array of primitives -- not used */
function copyArray(arr) {
    const newArray = [];
    for (const element of arr) {
        newArray.push(element);
    }
    return newArray;
}

// O(n) time & O(n) space  https://wsvincent.com/javascript-merge-two-sorted-arrays/
function mergeTwo(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while (current < (arr1.length + arr2.length)) {

        let isArr1Depleted = index1 >= arr1.length;
        let isArr2Depleted = index2 >= arr2.length;

        if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
            merged[current] = arr1[index1];
            index1++;
        } else {
            merged[current] = arr2[index2];
            index2++;
        }

        current++;
    }

    return merged;
}