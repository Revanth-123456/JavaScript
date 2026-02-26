
// to invoke method from parent class we use super class

class Parent {
    hello() {
        return`Parent`;

    }
}

class Children extends Parent {
    constructor(){
        super();
    }
    hi(){
        return `${super.hello()} says hi to children`;
    }
}

let child=new Children();
console.log(child.hi())