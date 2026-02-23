// lexical scope
// global scope
// local scope
// nested scope
// block scope

// ` it is present at left of 1 in keyboard and it is used in ${ } case else no output

let brand="5 star";  //global scope
function ad(){
    let name="Ramesh";  //local scope
    console.log(`ad artist:${name}`)

    console.log(`brand is : ${brand}`);
}
console.log(`outside is: ${brand}`);
// console.log(`artist name:${name}`)  --- error;
ad();


