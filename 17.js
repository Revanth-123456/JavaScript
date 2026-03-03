//asynchronously happening

function orderFood(callback) {
    setTimeout(() => {
        console.log("i am ordering the food");
        callback();
    }, 7000);
}

function prepareFood(callback) {
    setTimeout(() => {
        console.log("preparing the food");
        callback();
    }, 4000);
}

function findDeliveryPartner(callback) {
    setTimeout(() => {
        console.log("finding the delivary partner");
        callback();
    }, 2000);
}

function foodDelivered() {
    setTimeout(() => {
        console.log("food delivered");
    }, 1000);
}

orderFood(() => {
    prepareFood(() => {
        findDeliveryPartner(() => {
            foodDelivered();
        });
    });
});

//asynchronous
// orderFood();
// prepareFood();
// findDeliveryPartner();
// foodDelivered();