require('dotenv').config();
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, resp, next) => {
    let token;
    // Get the token from resp object
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_SECRECT_KEY, (err, decoded) => {
            if (err) {
                resp.status(401);
                throw new Error("User not authorized");
            }

            req.user = decoded.user;
            console.log(decoded);
            next();
        })
    }
    if (!token) {
        resp.status(401);
        throw new Error("User not authorized or token is missing");
    }
})


module.exports = validateToken;