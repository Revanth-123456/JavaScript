// for(let i=0;i<=5;i++){
//     for(let j=0;j<=5;j++){ 

//     }
// console.log("*");
// }

let n = 5;

for (let i = 1; i <= n; i++) {
    let str = "";
    str += "* ".repeat(i);
    console.log(str);
}


let ni = 5;

for (let i = 1; i <= ni; i++) {
    let str = "";
    str += "  ".repeat(ni - i);  // spaces
    str += "* ".repeat(i);      // stars
    console.log(str);
}


let no = 5;

for (let i = 1; i <= no; i++) {
    let str = "";
    str += " ".repeat((no - i) * 2); // extra spaces
    str += "* ".repeat(i);
    console.log(str);
}
