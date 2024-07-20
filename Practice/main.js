"use strict";
let message = "Sidra";
console.log(`Hello ${message}, would you like to learn some TypeScript today?”`);
let cases = "Sidra";
console.log(cases.toLowerCase());
console.log(cases.toUpperCase());
console.log(cases.charAt(0).toUpperCase() + cases.slice(1).toLowerCase());
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
let famous_per = "Albert Einstein";
console.log(`${famous_per} once said, “A person who never made a mistake never tried anything new.”`);
console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);
let fav = 7;
console.log(`My fav num is ${fav}`);
//7-18-2024
// Practice typescript
let coommit = "Sidra";
console.log(coommit);
let arr = ["sidra", "ahmed", "danish"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
let arr1 = ["sidra", "ahmed", "danish"];
arr1.forEach(arr => {
    console.log(`My Favourite Names ${arr}`);
});
let arr2 = ["car", "Motorcycle", "truk"];
arr2.forEach(arr => {
    console.log(`I would Like ${arr}`);
});
let arr3 = ["sidra", "ahmed", "danish"];
arr3.forEach(arr => {
    console.log(`I invite for you dinner ${arr}`);
});
let can = "sidra";
console.log(`${can} Can not come to the dinner`);
let newList = "ahed";
arr3[arr3.indexOf(can)] = newList;
arr3.forEach(arr => {
    console.log(`i inivte for you dinner ${arr}`);
});
