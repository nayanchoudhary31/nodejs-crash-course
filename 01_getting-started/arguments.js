/**
 *  process.argv ["NODE PATH","FILE PATH","ARGS"];
 */
const minimist = require('minimist');
console.log(process.argv);

// process.argv.forEach((element, index) => {
//     console.log(`${index} : ${element}`)
// })

/**
 *  With help of minimist we can read the args value 
 */

const argsNew = minimist(process.argv.slice(2));
console.log(`Parameter :${argsNew.name}`)