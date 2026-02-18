let arr=['India','Srilanka'];
console.log(arr);
arr.push('Australia');
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift('Zimbambve');
console.log(arr);
arr.shift();
console.log(arr);

let arrr=['a','z','e','b','h'];
console.log(arrr);
console.log(arrr.sort().reverse());


// Write a js program
// input arr=[1,2,3,4,5]
// final=7;
// output=[[0,5],[1,4],[2,3]]
let output=[];
let nrr=[1,2,3,4,5,6]
let final=7;
for(let i=0;i<nrr.length;i++) {
    for(let j=i+1;j<nrr.length;j++) {
        if(nrr[i]+nrr[j]===final) {
          output.push([i,j]); 
        }
    }
}
console.log(output);


// write a js program to find whether the given string is pallindrome or not
let string="madam";
let string2=string.split('').reverse().join("");
console.log(string2);
if(string==string2){
    console.log("it is palindrome");
}
