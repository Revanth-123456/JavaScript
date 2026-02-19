let value=5+3;
console.log(value);

// implicit conversion happens automatically by itself(internally)
let value1=5+'3';
console.log(value1);

let value2=5-'2';
console.log(value2);

let value3=5%'3';
console.log(value3);

let value4=5**'3';
console.log(value4);

let data=1+2+'abcd'+1+2;
console.log(data);

let value5=1+true;
console.log(value5);

console.log(1/0);


// explicit means externallly or outside we convert(type casting)
let num=1234;
console.log(num);

let num1=String(1234);
console.log(num1);

let num2=Boolean(" ");
console.log(num2);

let num3=Number('1234');
console.log(num3);