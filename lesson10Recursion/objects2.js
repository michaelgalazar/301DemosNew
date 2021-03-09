
/* eslint-disable */
let person1={
    name: "Allen",
    age: 23,
    employed: true,
}

let person2 = {
    name: "Allen",
    age: 23,
    employed: true,
}

console.log(person1 === person2);

person1.age = 35;
console.log(person2.age);

person2.salary = 5000;
console.log(person1.salary);


let a = 5;
let b = 7;
console.log(a,b);
swap1(a,b);
console.log(a,b)

let arr = [1,2,3];
console.log(arr);
swap2(arr, 0, 2);
console.log(arr);

function swap1(a,b){
    let temp = a;
    a=b;
    b=temp;
}

function swap2(arr, i, j){
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j]= temp;
}
