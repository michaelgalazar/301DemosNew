"use strict";

/* be very cautious about adding and removing elements to an array that you are looping over */

const arr = [1, 2, 3];

// for (const element of arr){
//     console.log("element: ", element);
//     console.log(arr);
//     console.log("pop: ", arr.pop());
//     console.log(arr);
// }

// for (const element of arr){
//     console.log("element: ", element);
//     console.log(arr);
//     console.log("shift: ", arr.shift());
//     console.log(arr);
// }


for (const element of arr){
    console.log("element: ", element);
    console.log(arr);
    console.log("unshift: ", arr.unshift(element));
    console.log(arr);
}