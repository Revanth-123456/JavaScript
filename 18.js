//promise is a js object that will resolve or get rejected

let getChocalate = new Promise((resolve, reject) => {
    setTimeout(() => {
        //true or false here
        let haveChocalate = true;
        if (haveChocalate) {
            resolve('i have completed a promise');
        } else {
            reject('not good with promise');
        }
    }, 2000);
});

getChocalate.then((message)=>{
    console.log("success",message);
}).catch((error)=>{
    console.log("error",error);
});