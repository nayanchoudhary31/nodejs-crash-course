// const promises = new Promise((resolve, reject) => {
//     if (false) {
//         const person = { name: "Nayan" }
//         resolve(person)
//     } else {
//         const error = { errCode: 101 }
//         reject(error)
//     }
// })

/**
 *  Promise.then(cb1(),cb2())
 * cb1() is for resolve() and cb2 is for reject()
 */
// promises.then((val) => {
//     console.log("Data :", val);
// }).catch((err) => { console.log(`Catch Block ${err.errCode}`) })

// Promises are by default async in nature

// function asyncTask() {
//     return Promise.resolve();
// }

// asyncTask().then(() => { console.log(name) });

// const name = "Nayan";

// const p = Promise.resolve("Done");

// p.then((val) => {
//     console.log(val)
//     return "Done 1"
// }).then((val) => {
//     console.log(val);
//     return "Done 2";
// }).then((val) => {
//     console.log(val);
//     return "Done 3"
// }).catch((err) => {
//     console.log(err);
// })


// Multiple API's Call using promises

const multiAPICall = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`API executed in ${time} miliseconds`);
        }, time)
    })
}


multiAPICall(10000).then((val) => { console.log(val) }).catch((err) => { console.log(err) });

const multiApiCallList = [multiAPICall(1000), multiAPICall(2000), multiAPICall(500)]

Promise.all(multiApiCallList).then((values) => {
    console.log(values)
})


Promise.race(multiApiCallList).then((value) => {
    console.log(value)
})