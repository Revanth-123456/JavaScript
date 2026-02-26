// encapsulation-hiding the data from direct access;

class Balance {
    #balance;

    constructor(balance){
        this.#balance=balance;
    }
    getBalance(){
        return this.#balance;
    }
    setBalance(balance){
        this.#balance=balance;
    }
}

let bank=new Balance(10000);
console.log(bank.getBalance());
// console.log(bank.#balance);-error cannot acees private
bank.setBalance(20000);
console.log(bank.getBalance());