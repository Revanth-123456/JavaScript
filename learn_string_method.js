// Trim method is used to remove extra spaces at start and the end
// length is used to calculate the length of the string
// let str="      I_am_in Banglore          ";  
// console.log(str.trim().length);
// split is used to split the string
// let str="I__am_in Banglore     __     ";  
// console.log(str.split("  "));
// let str="I am in Banglore";  
// console.log(str.split("").join("_"));
// let city="Banglore";
// console.log(city.toLocaleUpperCase());
let city="Banglore";
let state="Karnataka";
console.log(state.concat('   ',city));
console.log(state+" "+city);

let str="I am in Banglore";
// true or false
console.log(str.includes("Am"));
// if not -1, else correct position of array
console.log(str.search('n'));
