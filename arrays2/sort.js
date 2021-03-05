"use strict";

let strings = ["Cat", "Ball", "Apple"];
strings.sort();
console.log(strings) // Apple, Ball, Cat

let numbers = [1, 2, 11, 21, 3, 32];
numbers.sort();
console.log(numbers); // 1, 11, 2, 21, 3, 32

numbers.sort(comparator);
console.log(numbers);

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number
 * @returns {number} 1, -1, or 0 if first is greater, less or equal
 */
function comparator(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
}

