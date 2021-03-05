"use strict";
/*
Write code to create an array named scores and fill it with 5 
test scores 10, 20, 30, 40 and 50.
*/
const scores = [10, 20, 30, 40, 50];


/*Now write a function named findAverage, that takes an array as an 
argument and return average of the array values.
*/
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} average of numbers
 */
function findAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    const average = total/arr.length;
    return average;
}

/*
Call findAverage function passing array you created in step1 and
save the return result in a variable, average.
*/
const average2 = findAverage(scores);
console.log("expect: 30 : " , average2);

/*
Print the average, it should be 30 for this example.
Create a second array filled with 10 random values between 0 to 10 and find the average of the array values.
Make sure your program computes correct average for an array of any size.
*/
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    const randomNum = Math.random() * 10;
    randomNumbers[i] = randomNum;
}

console.log("randomNumbers: ", randomNumbers);
console.log("average of random numbers is : ", findAverage(randomNumbers));
