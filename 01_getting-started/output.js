const x = 1;
const y = 2;

// console.log(x, y);

/**
 * Format Specifier
 *  %s for the string
 * %d for Numbers
 * %i for Integers
 * %o For Objects
 */

// console.log("This is my %s and my age is %d", "Nayan", 25);

/**
 *  console.clear() to clear the console
 */
// console.clear();

/**
 * console.time() to get know the time for a function completion
 */

// const sum = () => { console.log(`The sum is ${2 + 3}`) };
// const mul = () => { console.log(`The multiply is ${2 * 3}`) };

// const time = () => {
//     console.time('sum()');
//     sum();
//     console.timeEnd("sum()");
//     console.time('mul()')
//     mul();
//     console.timeEnd("mul()");
// }

// time();


const ProgressBar = require('progress');
const chalk = require('chalk');

const bar = new ProgressBar("Downloading :bar :rate/bps :precent :etas", {
    total: 20
})


const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
        clearInterval(timer)
    }
}, 100)

console.log(chalk.blue("Colored Console Log"))