const userLogin = () => {
    //Promt User for login password
    const username = prompt("Enter the username");
    const password = prompt("Enter password");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Performing User Authentication`);
            if (username === 'iamnayan31' && password === 'nayan123') {
                resolve("User Authenticated!!!!")
            } else {
                reject("User Authentication Failed!!!")
            }
        }, 1000)
    })
}

function goToHomePage(userAuthStatus) {
    return Promise.resolve(`Go to the home page${userAuthStatus}`);
}

// userLogin().then((response) => {
//     console.log("Validated User");
//     return goToHomePage(response);
// }).then((authStatus) => {
//     console.log(authStatus);
// }).catch((err) => {
//     console.log(err);
// })

async function performTask() {
    const response = await userLogin();
    console.log(response);
    const userAuth = await goToHomePage(response);
    console.log(userAuth);

}

performTask();