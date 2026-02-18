// core concept-object-non primitive
// object is a data that holds key-value pair(property)

let laptop={
    name:'hp',
    model:'victus',
    generation:'I5',
    color:'Blue',
    price:'75000',
}
console.log(laptop);

// to access object in java we have ,(comma) operator in javascript no such but have below 2 ways:-
console.log(laptop.name);
console.log(laptop['name']);

let employee={
    name:'David',
}
console.log(employee);
// add new property
employee.programming='Javascript';
console.log(employee);
employee['id']=1234;
console.log(employee);

let hmployee={
    name:'David',
    id:1234,
}
console.log(Object.keys(hmployee));
console.log(Object.values(hmployee));


let person1={
    name:'David',
}
let person2={
    number:1234,
    name:'Johnson'
}
// merge two object
// if same key on both objects it will overwrite the below one
let op=Object.assign(person1,person2);
console.log(op);
console.log(person1);

// nested object
let person={
    name:'David',
    number:'1234',
    address:{
        city:'Banglore',
        area:'Rajajinagar',
    }
}
console.log(person);
console.log(person.address.city);

// array of object (*important)
// write a js program just to get iphone mobiles
let response=[
    {brand:'Iphone',color:'black'},
    {brand:'Samsung',color:'blue'},
    {brand:'Redmi',color:'gray'},
    {brand:'Iphone',color:'blue'}
]
console.log(response);
let nee=[];
// it is just output
console.log(response[0]);
console.log("=====================================================");
for(let i=0;i<response.length;i++){
    // 
    console.log(response[i]);
    if(response[i].brand==='Iphone'){
        nee.push(response[i]);
    }
}
console.log(nee);


