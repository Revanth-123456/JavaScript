class House {
    constructor(name) {
        this.name = name;
    }
    // method or function
    myhouse() {
        console.log(`house owner ${this.name}`)
    }
}
// let obj = new House("David");
// obj.myhouse();


// inheritence-acquiring the property and methods 
class Apartment extends House{
    // overriding- 
    myhouse(){
        console.log(`i am in the children class`);
    }
 }
//  polymorphism-
class Prestige extends House{
    myhouse(){
        console.log(`hello prestige`)
    }
}

let data=new House("Johnson");
data.myhouse();
let obj=new Apartment("david");
console.log(obj);
obj.myhouse();

let obj2=new Prestige("Hello");
obj2.myhouse();
