"use strict";
const assert = require("assert");
//const arrays = require("./arrayMethods.js");
const arrays = require("../students/arrayMethods59.js");


/* 0.  Write a function that will take an index and two arrays and splice the second array into the first at the given position */
describe("splice insert", function () {

    it("2 [1, 2, 5] [3, 4]", function () {
        assert.deepStrictEqual(arrays.insertArray(2, [1, 2, 5], [3, 4]), [1, 2, 3, 4, 5]);
    });
 
});


/* 1.	Write a function, isArrayEqual, that returns true if two arrays have === elements, else false; */
describe("isArrayEqual", function () {

    it("1 2 3 true", function () {
        assert.strictEqual(arrays.isArrayEqual([1, 2, 3], [1, 2, 3]), true);
    });
    it(" 1 2 3 4 5 false", function () {
        assert.strictEqual(arrays.isArrayEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]), false);
    });

});


/* 2.	Write a function that checks if an array is palindrome by using push and pop array methods to reverse the 
array and then isArrayEqual method you wrote for 1.  */
describe("palindrome via push and pop", function () {

    it("aba true", function () {
        assert.strictEqual(arrays.isPalindrome(["a", "b", "a"]), true);
    });
    it("abc false", function () {
        assert.strictEqual(arrays.isPalindrome(["a", "b", "c"]), false);
    });
    it("rotator true", function () {
        assert.strictEqual(arrays.isPalindrome(["r", "o", "t", "a", "t", "o", "r"]), true);
    });
});

/* 3.      Write a function, reverse2String,  that transforms a given array as following. Use appropriate array methods. 
Input (Array) 	Output (String) 
['Quick', 'Brown', 'Fox'] 	"Fox_Brown_Quick" */
describe("reverse2String", function () {

    it("Fox_Brown_Quick", function () {
        assert.strictEqual(arrays.reverse2String(["Quick", "Brown", "Fox"] ), "Fox_Brown_Quick");
    });

    it("4_3_2_1", function () {
        assert.strictEqual(arrays.reverse2String([1, 2, 3, 4] ), "4_3_2_1");
    });
});



/*
    4.      Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and a value to search in the array and return an array result with three values.
    a.	First value is boolean representing if the search value exists in the array.
    b.	Second value is the first index of value found in the array or -1
    c.	Third value is the last index of value found in the array or -1.
*/
describe("enhancedIncludes", function () {

    it("[1, 2, 3, 4, 2], 2 ]", function () {
        assert.deepStrictEqual(arrays.enhancedIncludes([1, 2, 3, 4, 2], 2 ), [true, 1, 4]);
    });

});

/* 5. Write a function, ssReverse, that returns reversed copy of a given array (original array should remain intact). 
Do this without using reverse method, instead use splice and slice methods.  */
describe("ssReverse", function () {

    it("[1, 2, 3, 4]", function () {
        assert.deepStrictEqual(arrays.ssReverse([1, 2, 3, 4 ]), [4,3,2,1] );
    });
});

// hints for 5:
// - which is appropriate for making a copy of an array, splice or slice?
// - can you write a function that takes an index and an array and a newElement and replaces the element at the index with the newElement?
//   e.g., frontReplace(2,[1, 2,3,4,5,6,7],99) --> [1,2,99,4,5,6,7)
// - can you write a function that takes an index and an array and a newElement and replaces the element at the length - 1 - index with the newElement?
//  e.g., backReplace(2,[1, 2,3,4,5,6,7],99) --> [1,2,3,4,99,6,7)
// - can you write a function that takes an index and an array and returns a string with the elements at positions index and length - 1 - index
//   e.g., getIndices(2,[1, 2,3,4,5,6,7]) --> "35"

/*   6. (EC) Write a function that merges two sorted arrays into one single sorted array. Make use of shift and push array methods. */
describe("merge via shift and push", function () {
    it("138 merge with 059 ", function () {
        console.log(arrays.merge([1, 3, 8], [0, 5, 9]));
        assert.deepStrictEqual(arrays.merge([1, 3, 8], [0, 5, 9]), [0, 1, 3, 5, 8, 9]);
    });
});

/*  hints for 6
There are various solutions to the problem of merging two sorted arrays.  The following, shiftPush, might be helpful
as a helper method in an approach that goes through the elements of the first array and merges each with the second array.
function shiftPush(shiftArray, target, addArray) 
shiftArray is a sorted array, take the elements in it that are less than target, and push them onto addArray 
*/
    // it("shiftPush helper", function () {
    //     console.log(arrays.shiftPush([1, 3, 8], 4, []));
    //     assert.deepStrictEqual(arrays.shiftPush([1, 3, 8], 4, []), [1, 3]);
    // });
