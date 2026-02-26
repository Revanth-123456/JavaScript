// Abstraction-hiding useful information
// polymorphism and encapsulation program important

// class car {
//     checkEngine() {
//         console.log(`staring engine`);
//     }
//     start() {
//         this.#checkEngine();
//         console.log(`car starts`);
//     }
// }
// let car = new car();
// car.start();
// car.#checkEngine();

class Car {
    checkEngine() {
        console.log("starting engine");
    }

    start() {
        this.checkEngine();
        console.log("car starts");
    }
}

let car = new Car();
car.start();
car.checkEngine();   // ✅ works