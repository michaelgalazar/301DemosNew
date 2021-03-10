"use strict";

exports.power = power;
exports.countDigits = countDigits;
exports.reverse = reverse;
/**
 * @param{number}--x
 * @param{number}--y
 * @returns {number} n
 * 
 * 
 */
function power(x,y){
    if(y===0){
    return 1
    }else {
        return x* power(x,y-1);
    }
}
console.log(power(2,3));
/**
 * 2,count the digits of a given number
 * 
 * 
 * 
 */


function countDigits(n) {
    if (n===0){
        return 0;
    }else{
        return 1 +countDigits(parseInt(n/10));
    }
}

console.log(countDigits(1234));

 /**
 * 
 * @param {str} 
 * @param {number}
 * @return {str}
 * 
 * 
 */
function reverse(str) {
    if (str === ""){
       return ""; 
    } else{
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverse("apple"));