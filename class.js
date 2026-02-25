class House{
    // constructor=method where u initialize the data
    constructor(name,color,address){
        this.name=name;
        this.color=color;
        this.address=address;
    }
}
let obj1=new House("David","blue","bashyam Circle");
// class-blueprint of an object
// object-instance of a class
console.log(obj1);
let obj2=new House("John","red","RR");
console.log(obj2);