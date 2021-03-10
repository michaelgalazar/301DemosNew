"use strict";

exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.suffix = suffix;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;


/* Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
It should return true when called with sam1 and sam2.
It can assume that the only properties it needs to check are name and age
*/

/**
 * 
 * @param {Object} pers1 is a person object
 * @param {Object} pers2 is a person object
 * @returns {boolean} true if both properties match
 */
function isPersonEqual(pers1, pers2) {
    if (pers1.name !== pers2.name || pers1.age !== pers2.age) {
        return false;
    } else {
        return true;
    }
}

/*
3.	Write the function countProperties(obj) which returns number of properties of an object.
*/
/**
 * 
 * @param {Object} obj is any object
 * @returns {number} count of properties
 */
function countProperties(obj) {
    let count = 0;
    for (const prop in obj) {
        count++;
    }
    return count;
}

/*
4.	Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize", otherwise return false. 
*/

/**
 * 
 * @param {string} str is any string
 * @returns {boolean} true if is lottery or prize
 */
function checkSpam(str) {
    if (str.includes("lottery") || str.includes("prize")) {
        return true;
    } else {
        return false;
    }
}

/*
5.	Write a function named suffix that returns the common suffix of two strings. For example, the common suffix of “swimming” 
and “walking” is “ing”. This function takes two parameters and returns the common suffix.
*/

/**
 * 
 * @param {string} str1 is any string
 * @param {string} str2 is any string
 * @returns {string} the common suffix or ""
 */
// function suffix(str1, str2) {
//     let common = "";
//     let shortest = Math.min(str1.length, str2.length);

//     for (let i = shortest - 1; i >= 0; i--) {
//         if (str1[i] === str2[i]) {
//             common = str1[i] + common;
//         } else {
//             return common;
//         }
//     }
//     return common;

// }


/**
 * Yogesh Ghimiray
 * @param {string} str1 is any string
 *  @param {string} str2 is any string
 * @returns {string} the common suffix or ""
 */
function suffix(str1, str2) {
    let len1 = str1.length - 1;
    let len2 = str2.length - 1;
    let suffixStr = "";
    while (len1 >= 0 || len2 >= 0) {
        if (str1[len1] !== str2[len2]) {
            break;
        } else {
            suffixStr = str1[len1] + suffixStr;
        }
        len1--;
        len2--;
    }

    return suffixStr;
}




/*
7.	Write the function getAverageAge(users) that gets an array of objects with two properties name and age and returns the average age.
Use for .. of
*/

/**
 * 
 * @param {Array} users is array of objects with age property
 * @returns {number} average age
 */
function getAverageAge(users) {
    let average = 0;
    for (const user of users) {
        average += user.age;
    }
    average = average / users.length;
    return average;
}

/* 8.  write a function to return  sum of the first elements of the inner arrays */
/**
 * 
 * @param {Array} arr with subarrays of numbers
 * @returns {number} sum of the first elements 
 */
function sumFirst(arr) {
    let sum = 0;
    // for (const element of arr){
    //     sum += element[0];
    for (let i = 0; i < arr.length; i++) {  //[1 , 2]
        sum += arr[i][0];
    }
    return sum;
}