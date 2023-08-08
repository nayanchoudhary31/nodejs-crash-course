require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router()


//Application-level-middleware

const loggerMiddleware = (req, resp, next) => {
    console.log(`${new Date()} --- Req [${req.method}]  [${req.url}]`)
    next();
}
app.use("/api/users", router);
const getUsers = (req, resp, next) => {
    resp.json({ message: "All Users" });
}

const createUser = (req, resp, next) => {
    resp.json({ message: "User Created" });
}
const fakeAuth = (req, resp, next) => {
    const authStatus = false;
    if (authStatus) {
        console.log(`AuthStatus : ${authStatus}`);
        next();

    } else {
        throw new Error("Authentication Failed");
    }
}

router.use(fakeAuth);

router.route("/").get(getUsers).post(createUser);

app.use(loggerMiddleware);




const PORT = process.env.PORT || 2738;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})