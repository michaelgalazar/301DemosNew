
/* eslint-disable */
// let person1={
//     name: "Allen",
//     age: 23,
//     employed: true,
// }

// let person2 = {
//     name: "Allen",
//     age: 23,
//     employed: true,
// }

// console.log(person1 === person2);

// person1.age = 35;
// console.log(person2.age);

// person2.salary = 5000;
// console.log(person1.salary);


let a = 5;
let b = 7;
console.log(a,b);
swap1(a,b);
console.log(a,b)

let arr1 = [1,2,3];
console.log(arr1);
swap2(arr1, 0, 2);
console.log(arr1);

function swap1(a,b){  //swapping primitives (which are values)
    console.log(a, b);
    let temp = a;
    a=b;
    b=temp;
    console.log(a, b);
}

function swap2(arr2, i, j){//swapping object properties
    let temp = arr2[i];
    arr2[i]= arr2[j];
    arr2[j]= temp;
}
