"use strict";
const assert = require("assert");
const arrays = require("./arrayMethods.js");


/*  THIS IS A SAMPLE FILE TO DEMO SETTING UP THE MOCHA AND CODE FILES FOR A DAILY ASSIGNMENT.
LOOK IN THE     mochaTests FOLDER FOR THE ACTUAL MOCHA TEST YOU SHOULD USE FOR THIS ASSIGNMENT
*/

/* 0.  Write a function that will take an index and two arrays 
and splice the second array into the first at the given position */
describe("splice insert", function () {

    it("2 [1, 2, 5] [3, 4]", function () {
        assert.deepStrictEqual(arrays.insertArray(2, [1, 2, 5], [3, 4]), [1, 2, 3, 4, 5]);
    });
 
});


