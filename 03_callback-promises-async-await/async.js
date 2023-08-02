console.log("Task-1")
console.log("Task-2")
console.log("Task-3")


// const sleep = (miliseconds) => {
//     const startTime = new Date().getTime();
//     console.log(`Operation is starting.....`)
//     while (new Date().getTime() < startTime + miliseconds) {
//         console.log(`Operation is in progress....`)
//     }
//     console.log(`Operattion is finished.....`);
// }


// sleep(2000);

// console.log(`Operation Finished EOP`);


const sleep = (miliseconds) => {
    console.log(`Operation Started....`);

    setTimeout(() => {
        console.log(`Operation in progress....`)
    }, miliseconds)

    console.log(`Operation is done .....`);
}

sleep(1000);
console.log(`Operation after sleep calling`);