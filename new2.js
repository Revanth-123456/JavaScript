function banking() {
    let balance = 10000;

    function addMoney(value) {
        balance = balance + value;
        return balance;
    }

    function withdrawMoney(value) {
        balance = balance - value;
        return balance;
    }

    return {
        addMoney,withdrawMoney
    };
}

let balanceData = banking();

console.log("I have balance", balanceData.addMoney(10000));
console.log("I have balance", balanceData.withdrawMoney(5000));