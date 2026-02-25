class PaymentMethod {
    constructor(amount) {
        this.amount = amount;
    }

    pay() {
        console.log("hello");
    }
}

class CreditCard extends PaymentMethod {
    constructor(amount, cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }

    pay() {
        console.log(
            `Processing credit card payment of ${this.amount} for card ending in ${this.cardNumber}`
        );
    }
}

class PayPal extends PaymentMethod {
    constructor(amount, email) {
        super(amount);
        this.email = email;
    }
    pay() {
        console.log(
            `initializing bank transfer of ${this.amount} to account number  ending in ${this.email}`
        );
    }
}

class BankTransfer extends PaymentMethod {
    constructor(amount, bankDetails) {
        super(amount);
        this.bankDetails = bankDetails;
    }
    pay() {
        console.log(
            `initializing bank transfer of ${this.amount} to account number  ending in ${this.bankDetails.accountNumber}`
        );
    }
}

const cardPayment = new CreditCard(150.75, `12345678123456`);
const paypalPayment = new PayPal(45.0, `user@example.com`);
const transferPayment = new BankTransfer(2000.0, {
    bankName: "global Bank",
    accountNumber: "378495040",
});

console.log("----Processing payment--------");
cardPayment.pay();
paypalPayment.pay();
transferPayment.pay();