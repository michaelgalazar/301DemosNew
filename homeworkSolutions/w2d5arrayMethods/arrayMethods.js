"use strict";
/* eslint-disable */

exports.insertArray = insertArray;

/*  THIS IS A SAMPLE FILE TO DEMO SETTING UP THE MOCHA AND CODE FILES FOR A DAILY ASSIGNMENT.
LOOK IN THE mochaTests FOLDER FOR THE ACTUAL MOCHA TEST YOU SHOULD USE FOR THIS ASSIGNMENT
*/

/* 0.  Write a function that will take an index and two arrays 
and splice the second array into the first at the given position */

/**
 * 
 * @param {number} index is integer for array index
 * @param {Array} target is array to be spliced
 * @param {Array} insert holds elements to splice
 * @returns {Array} the spliced array
 */
function insertArray(index, target, insert){

    target.splice(index, 0, ...insert);
    return target;


}

