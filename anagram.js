//ANAGRAM

function isAnagram(str1, str2) {
    // remove spaces & convert to lowercase
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();

    // if lengths not equal → not anagram
    if (str1.length !== str2.length) {
        return false;
    }

    // sort and compare
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// Example
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false