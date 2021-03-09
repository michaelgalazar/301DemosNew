"use strict";
/*Write code that creates three different person objects, sam1, sam2, john
Assume for this domain that all person objects have name and age properties
Use object literals to create the objects
sam1 and sam2 both have values “Sam” and 10
john has values “John” and 10 */
const sam1 = {
    name: "Sam",
    age: 10
};
const sam2 = {
    name: "Sam",
    age: 10
};
const john = {
    name: "John",
    age: 10
};
/*Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
assume that the only properties it needs to check are name and age
Call it with sam1 and sam2  and verify it returns true
Call with sam1 and john and verify false
*/
/**
 * 
 * @param {Object} obj1 is a person object
 * @param {Object} obj2 is a person object
 * @returns {boolean} true if values equal
 */
function isPersonEqual(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true;
    } else {
        return false;
    }
}
console.log("expect true: ", isPersonEqual(sam1, sam2));
console.log("expect false: ", isPersonEqual(sam1, john));