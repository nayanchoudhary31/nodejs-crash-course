/**
 *  Error Object
 */
// const error = new Error("I am an Error");
// console.log(error.stack);
// console.log(error.message);

const { CustomError } = require("./CustomError")

/**
 * Using Throw 
 */

// throw new Error("Error using Throw Object")


/**
 *  My Custom Error Objects
 */
// throw new CustomError("Custom Error Object");


function doSomething() {
    console.log(`Doing Something .....`);
    //  const data = fetch("localhost:301/api");
    //  return data;
}

/**
 *  Exception with Try Catch
 */

// try {
//     doSomething();
// } catch (e) {
//     console.log("Error Occured !!!!");
//     console.log(e);
// }

/**
 *  Expection with promises
 */

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve(doSomething());
//     } else {
//         reject(doSomething())
//     }
// })

// promise.then((val)=>{

// }).catch((err)=>{
//     console.log("Error Happen");
//     console.log(err);
// })


/**
 *  Execption with async & await 
 */

const anotherFunc = async () => {
    try {
        doSomething();
    } catch (err) {
        throw new CustomError(err.message);
    }
}
anotherFunc();



