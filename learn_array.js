// array is an object which is used to store the collection of data
// syntax variable array_name=[list of data];
// let arr=['1','2','3','4'];
// console.log(arr[0]);
// console.log(arr.length);
// for(let i=0;i<arr.length;i++){
//     console.log("value is",arr[i]);
// }


// write  a js program to calculate the occurance of letter "a";
let str = "I am in Banglore";
let counter = 0;

for (let i = 0; i <= str.length; i++) {
    if (str[i] == "i") {
        counter++;
    }
}
console.log("Number of 'a' occurrences:", counter);


// write a js program to find largest word in the string;
let string = "I Banglore am in ";
let arr=string.split(" ");
console.log(arr);
console.log(arr.length);
let final = ""; 
for(let i=0;i<arr.length;i++){
    if(arr[i].length>final.length){
        final=arr[i];
    }
}
console.log("Largest word:", final);

