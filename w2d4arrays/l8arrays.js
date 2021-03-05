"use strict";

exports.matrixAddition = matrixAddition;
//exports.matrixAddition = matrixAddition;


/* Do matrix addition and return result on matrix format for following:
matrix addition of [[0,1,2],[9,8,7]] and [[6,5,4], [3,4,5]]  should be [ [ 6, 6, 6 ], [ 12, 12, 12 ] ]",
*/

/**
 * 
 * @param {Array} matrix1 is 2d array
 * @param {Array} matrix2 is 2d array
 * @returns {Array} sum array
 */
function matrixAddition(matrix1, matrix2) {
    let sumMatrix = [[],[]];

    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[i].length; j++) {
            sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    console.log(sumMatrix);
    return sumMatrix;

}