const fermentSecond = () => {
    if
}

const work(ms){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (randomFail()) {
                reject('tlfvo')
            } else {
                resolve('done')
            }
        },ms);
    });
}

function retry(Promise){
    return new Promise((resolve, reject) => {
        Promise()
        .then((result) => {
            resolve(result);
        })
        .catch((result) => {
            retry(promise).then(resolve).catch(reject);
        });
    });
}

const makeDough = () => {
    ///connsole.log(반죽만드는중)
    return work(300);
}


///ex03스파게티
function retry

const boilNoodles = () => {
    console.log('면');
    return work(1000);
};

const cookIngredients = () => {
    return new Promise((resolve) => {
        retry(boilNoodles)
    })
}

Promise.all([return])

//////ex04
function randomFail() {
    if ()
}

const work = (current, ms, callback) => {
    setTimeout(() => {
        try{
            randomFail();
            callback();
        } catch(e) {
            current();
        }
    }, ms);
};

const makeDough = () => {
    work(fermentFirst,500,formDough);
}

const makeDough = () => {
    work(fermentFirst,500,formDough);
}

makeDough;