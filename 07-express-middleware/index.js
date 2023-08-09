require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan'); //for logging purpose
const multer = require('multer'); // used for file upload 
const app = express();
const router = express.Router()
const upload = multer({dest:'./public/uploads'})


// 5. Third-party-middleware


// Built-in-middleware
app.use(express.json()); // build in middleware that handle the json data sent by clients
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))) // build in middleware use to serve static files to client directly


//Third Party Middleware
app.use(logger('dev'))

//Application-level-middleware
const loggerMiddleware = (req, resp, next) => {
    console.log(`${new Date()} --- Req [${req.method}]  [${req.url}]`)
    next();
}
app.use(loggerMiddleware);
// Router-level-middleware
app.use("/api/users", router);

const fakeAuth = (req, resp, next) => {
    const authStatus = true;
    if (authStatus) {
        console.log(`AuthStatus : ${authStatus}`);
        next();

    } else {
        resp.status(401);
        throw new Error("Authentication Failed");
    }
}

const getUsers = (req, resp, next) => {
    resp.json({ message: "All Users" });
}

const createUser = (req, resp, next) => {
    const data = req.body
    console.log(data);
    resp.json({ message: "New User Created" });
}

router.use(fakeAuth);

router.route("/").get(getUsers).post(createUser);

//Error-handling-middleware
const errorHandler = (err, req, resp, next) => {
    const statusCode = resp.statusCode ? resp.statusCode : 500;
    resp.status(statusCode);
    switch (statusCode) {
        case 401:
            resp.json({
                title: "Unauthorized",
                message: err.message
            })
            break;
        case 404:
            resp.json({
                title: "Not Found",
                message: err.message
            })
            break;
        case 500:
            resp.json({
                title: "Server Error",
                message: err.message
            })
            break;

        default:
            break;
    }
}

app.post("/upload",upload.single("image"),(req,resp,next)=>{
    console.log(req.file,req.body)
    resp.send(req.file)

},(err,req,resp,next)=>{
    resp.status(400).send({error:err.message})
})

app.all("*", (req, resp) => {
    resp.status(404);
    throw new Error("Route not found");
})
app.use(errorHandler);




const PORT = process.env.PORT || 2738;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})