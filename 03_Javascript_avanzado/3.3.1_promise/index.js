

const callback = (resolve, reject) => {
    const number = Math.floor(Math.random()*10);
    setTimeout(() => {
        if (number > 2) {
            resolve("hola, se logró");
        } else  {
            reject(new Error("No se logró"));
        }
    },2000);
}

const promise2 = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random()*10);
    setTimeout(() => {
        if (number > 0) {
            resolve("guardo en la base de datos");
        } else  {
            reject(new Error("No guardó en la base de datos"));
        }
    },4000);
});


const promise = new Promise(callback);

promise
.then((algo) => {
    console.log('acabé', algo);
    return promise2;
})
.then((algodepromise2)=>{
    console.log('acabé2',algodepromise2);
})
.catch((otroAlgo) => {
    console.log(otroAlgo, promise);
});

console.log('Mi promesa',promise);