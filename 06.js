// write a js program anagram means cat-act silent-listen formed by same letters
// 2 strings
// Write a JS program to check Anagram

// Anagram program (Node.js version)

let input1 = "cat";
let input2 = "Act";

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    return str1.split("").sort().join("") === 
           str2.split("").sort().join("");
}

if (isAnagram(input1, input2)) {
    console.log("It is an Anagram");
} else {
    console.log("Not an Anagram");
}


let vowels = ['a','e','i','o','u'];
let string = "I am in banglore";

let count = 0;

for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("Total vowels:", count);