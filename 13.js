// overloading-the same method but different objects are created
class Person {
    isEligible(name, age) {
        if (age === undefined) {
            console.log("not sure about DL");
        }
        else if (age < 18) {
            console.log("do not have DL")
        }
        else {
            console.log("have dl");
        }
    }
} 
const person = new Person();
person.isEligible("David");
person.isEligible('David',25);