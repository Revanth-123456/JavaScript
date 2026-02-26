class Mobile{
    constructor(product){
        this.product=product;
    }
}

// error
// class Iphone extends Mobile{
//     constructor(brand){
//         this.brand=brand;
//     }
// }

class Iphone extends Mobile{
    constructor(product,brand){
        super(product);
        this.brand=brand;
    }
}

let product=new Iphone("mobile","iphone");
console.log(product);