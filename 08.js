let obj={
    name:"David",
    hello:function(){
        // this keyword always refers to the object context
        
        console.log(`hello ${this.name}`);
    }
}
obj.hello();