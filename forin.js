let obj={
    name:'David',
    number:"1234"
}
// forin loop is generally used to iterate the object
for(let key in obj){
    console.log(`key:${key}`);
    console.log(key);
    console.log(obj[key]);
}