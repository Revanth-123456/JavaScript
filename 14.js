let obj=[
    {brand:'iphone',price:10000},
    {brand:'samsung',price:7000},
    {brand:'redmi',price:3000},
    {brand:'iphone',price:9000},
];

value=obj.filter((product)=>product.brand==="redmi");
console.log(value);

// a-accumulator,b-initialization its initial value 0;
let valueTwo=obj.reduce((a,b)=>a+b.price,0);
console.log(valueTwo);

obj.map((product)=>{
    console.log(product);
});