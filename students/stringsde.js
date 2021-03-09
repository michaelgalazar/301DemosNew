"use strict";
"eslint-disable";
let car={};
//car={make:" Toyota"};
car.make="Toyota";
car.model="camry";
console.log(car);
car.model="Rava4";
console.log(car);
delete car.make;
console.log(car);


/**
 * 
 * @param {Object} obj1 object one
 * @param {Object} obj2 object 2
 * @return {boolean} returns true if the two objects are equal
 */
function  isPersonEqual(obj1, obj2){
    return (obj1.name===obj2.name&&obj1.age===obj2.age);
}
const sam1 = { name: "Sam", age: 10 };
const sam2 = { name: "Sam", age: 10 };
console.log(isPersonEqual(sam1,sam2));




/**
 * 
 * @param {Object} obj getting an object
 * @return {number} returning the number of properties 
 */
function  countProperties(obj){
    let count=0;
    for(let properties in obj){
        if(obj.hasOwnProperty(properties)){
            count++;
        }
    }
    return count;
}
let object1={name:"Dani",age:25,blood:"O",Department:"MSD"};
console.log(countProperties(object1));


/**
 * 
 * @param {String} str string
 * @return {boolean} check if string is found; 
 */
function  checkSpam(str){
    let result;
    let arraystring=str.split(" ");
    // if(str.includes("lottery")||str.includes("prize")){
    // result=true;
    // }else{
    //     result=false;
    // }
for(let elements of arraystring){
    if(elements==="lottery"||elements==="prize"){
result=true;
break;
    }else{
        result=false;
    }
}
    return result;
}
let str="hello mom lottery i got  and it is ";
console.log(checkSpam(str));


/**
 * 
 * @param {String} str1 string
 * @param {String} str2 string
 * @return {String} finding sufix of two strings 
 */
function suffix(str1,str2){
    let sufixresult="";
    let count=0;
    let length1=str1.length-1;
    let length2=str2.length-1;
    while(true){
        if(str1[length1-count]===str2[length2-count]){
            sufixresult=str1[length1-count]+sufixresult;
            count++;
        }else{
            break;
        }
        
    }
    return sufixresult;

}
let inputstring1="reading";
let inputstring2="seeding";
console.log(suffix(inputstring1,inputstring2));


/**
 * 
 * @param {String} s string
 * @return {String} return string
 */
function titleCase(s){
    return s[0].toUpperCase()+s.substr(1,s.length-1);
    }
    let str3="hello";
    console.log(titleCase(str3));

/**
 * 
 * @param {Array} users array
 * @return {number} number return 
 */
function getAverageAge(users){
    let sum=0;
    for(let i=0;i<users.length;i++){
        sum+=users[i].age;
    }
    return sum/users.length;
}
let arr=[{name:"abc",age:20},{name:"xyz",age:10}];
console.log(getAverageAge(arr));


/**
 * 
 * @param {Array} arr array
 * @return {number} number 
 */
function sumFirst(arr){
    let sum=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        sum=sum+arr[i][0];
}
}
return sum;
}
let array = [[1, 2], [3, 4], [5, 6]] ;
console.log(sumFirst(array));

module.exports={isPersonEqual,countProperties,checkSpam,suffix,titleCase,getAverageAge,sumFirst};
//exports.sumFirst = sumFirst;