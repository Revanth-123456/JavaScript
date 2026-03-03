//only once
// setTimeout(() => {
//     console.log("Hello after 2 seconds");
// }, 2000);


//repeating
// setInterval(() => {
//     console.log("code with a delay");
// }, 2);

//callback-passing function as an argument to another function and making the passed 
// function to get executed after the completion of current function
//to make asynchronous function to synchronous we use callback

function one(callback){
    setTimeout(()=>{
        console.log("function one");
        callback();
    },2000);
}

function two(){
    console.log("function block two");
}

// one(two);
//or
one(()=>{
    two();
});