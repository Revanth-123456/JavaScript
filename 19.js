function orderFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let haveOrdered = true;
            if (haveOrdered) {
                resolve("Recieved an order");
            } else {
                reject("unable to order at the moment");
            }
        },7000);
    });
}

function prepareFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isPrepared = true;
            if (isPrepared) {
                resolve("Preparing the food ");
            } else {
                reject("unable to prepare");
            }
        },4000);
    });
}

function findDeliveryPartner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isFound = false;
            if (isFound) {
                resolve("finding delivery partner ");
            } else {
                reject("unable to find partner");
            }
        },2000);
    });
}

function foodDelivered() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isDelivered = true;
            if (isDelivered) {
                resolve("food is deliverd ");
            } else {
                reject("food is not delivered");
            }
        },1000);
    });
}

orderFood().then((messsage)=>{
    console.log(messsage);
    return prepareFood();
}).then((messsage)=>{
    console.log(messsage);
    return findDeliveryPartner();
}).then((messsage)=>{
    console.log(messsage);
    return foodDelivered();
}).then((messsage)=>{
    console.log(messsage);
}).catch((error)=>{
    console.log("Failed ",error);
});


// json-javascript object notation
// this language used to make request and receive response

// let obj={
//     name:'david',
//     employee:'yes',
// }