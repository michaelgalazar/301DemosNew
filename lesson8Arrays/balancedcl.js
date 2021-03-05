"use strict";

/**
 * 
 * @param {*} balanced is an array
 * @returns {boolean} true if balanced
 */
function balance(balanced) {
    const newArray = [];
    for (const element of balanced) {
        if (element === "(" || element === "[" || element === "{") {
            balanced.pop(element);
            newArray.push(element);
        }
    }
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] !== balanced[i]) {
            return false;
        }
    }
    return true;
}
// function balance(balanced) {
//     const newArray = [];
//     for (const element of balanced) {
//         if (element === "(" || element === "[" || element === "{") {
//             balanced.pop(element);
//             newArray.push(element);
//         }
//     }
//     for (let i = 0; i < newArray.length; i++) {
//         if (newArray[i] !== balanced[i]) {
//             return false;
//         }
//     }
//     return true;
// }
const balanced = ["(", ")", "(", "[", "{", "}", "]", ")"];
console.log("expect true: ", balance(balanced));

const bal2 = ["(", "(", ")", ")", "(", ")"];
console.log("expect true: ", balance(bal2));
