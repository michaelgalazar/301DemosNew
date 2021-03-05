"use strict";

/* 


    get top of stack, "top"
     - if closing bracket check to see if it matches next on stack "next"
       -- if next is a matching open bracket then (discard both and ) continue process
       -- if next is a nonmatching open bracket then unbalanced -- break (or return false)
       -- if next is another closing bracket then push top onto closeStack, replace next and continue loop
     - if top is an open bracket (it must match the top of close stack)
       -- else not balanced

when empty original stack the closeStack must also be empty, else unbalanced
*/
const stack = ["(", "(", ")", ")"];

/**
 * 
 * @param {Array} stack is array of ( or )
 * @returns {boolean} true if balanced
 */
function checkBalance(stack) {
     let closeStack = [];
    while (stack.length > 1) {
        const top = stack.pop();
        if (top === ")") {
            //-- if next is a matching open bracket then (discard both and ) continue process
            if (stack[stack.length-1] === "(") {
                stack.pop();
                continue;
            } else {  //if next is another closing bracket then push top onto closeStack
                closeStack.push(top);
            }
        } else { //top is "(", must match the top of closeStack
            if (closeStack.length  === 0 || top !== closeStack.pop()) {
                return false;
            } //else top of stack and of closeStack match and have both been popped, so continue with loop.  are at end of loop here
        }
    }
    //now stack is empty or 1 element
    if (stack.length === 1) { // check to see if it matches closeStack last element, else false}
    const len = closeStack.length;
    const closeTop =closeStack.pop();
    const stackTop = stack.pop();
        if ( len=== 1 && closeTop === ")" && stackTop === "(") {
            return true;
        } else {
            return false;
        }
    }

    if (stack.length === 0 && closeStack.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("expect true: " , checkBalance(stack));


