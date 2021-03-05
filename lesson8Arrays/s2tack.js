"use strict";


const arr = ["(", "(", ")", ")"];
console.log("expect true: ", balanced(arr));
const arr2 = ["(", ")", "(", "[", "{", "}", "]", ")"];
console.log("expect true: ", balanced(arr2));

const bal2 = ["(", "(", ")", ")", "(", ")"];
console.log("expect true: ", balanced(bal2));
const bal3 = ["(", "(", ")",  "(", ")"];
console.log("expect false: ", balanced(bal3));


/**
 * 
 * @param {Array} expressionStack is array of ( or )
 * @returns {boolean} true if balanced
 * process:  https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
 */
function balanced(expressionStack) {
    /*
    Declare a character stack S.
     */
   
    const newStack = [];

    /*
    Now traverse the expression string exp.
    If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
        */
    for (const currentChar of expressionStack) {
        if (currentChar === "(" || currentChar === "[" || currentChar === "{") {
            newStack.push(currentChar);
        }
        /*    If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from 
        stack and if the popped character is the matching starting bracket then fine else brackets are not balanced.*/
        if (currentChar === ")" || currentChar === "]" || currentChar === "}") {
            const match = newStack.pop();
            if (match !== bracketMatch(currentChar)) {
                return false;
            }
        }
    }

    /*
    After complete traversal, if there is some starting bracket left in stack then “not balanced”
    */
    if (newStack.length > 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * 
 * @param {string} bracket is [ ( or {
 * @returns {string} matching bracket
 */
function bracketMatch(bracket){
    let result;
    switch(bracket){
        case ")": 
        result = "(";
        break;
        case "]": 
        result = "[";
        break;
        case "}": 
        result = "{";
        break;
    }
    return result;
}
console.log("expect : [", bracketMatch("]"));