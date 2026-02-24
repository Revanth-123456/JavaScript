function outer(){
    // closures is a js function that allows to return outer variable value even after outer function is closed
    // it is a js function that remembers outer variable even after outer function is closed
    // it is a js function that returns outer variable value even after outer function is closed
    let count=0;
    function inner(){
        count++;
        console.log(`count is ${count}`)
    }
    return inner;
}
let closure=outer();
closure();

