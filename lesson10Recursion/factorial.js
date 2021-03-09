"use strict";

/**
 * 
 * @param {number} number positive integer
 * @returns {number} factorial of number n * n-1 * n-2 ... * 1
 */
function factorial(number){

    if (number ===0 || number === 1){
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
console.log("expect 24 ", factorial(4));

/**
 * 
 * @param {number} number positive integer
 * @returns {number} fib of number 0 1 1 2 3 5 ..
 */
function fibonacci(number){
    if (number === 0){
        return 0;
    } else if (number === 1) {
        return 1;
    } else {
        const nextFib = fibonacci(number - 1) + fibonacci(number - 2);
        return nextFib;
    }
}
console.log("expect 13 ", fibonacci(7));