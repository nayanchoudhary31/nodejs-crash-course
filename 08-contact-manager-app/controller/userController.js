require('dotenv').config();
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//@desc Register New User
//@route /api/user
//@access public
const registerUser = asyncHandler(async (req, resp) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        resp.status(400);
        throw new Error("All fields are required!!");
    }

    const isAlreadyRegisterd = await User.findOne({ email });
    if (isAlreadyRegisterd) {
        resp.status(400);
        throw new Error("User are already registered");
    }

    //Hash the password
    const hashedPassword = await bycrypt.hash(password, 10);
    console.log(`Hashed Password : ${hashedPassword}`);

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if (user) {
        resp.status(201).json({ _id: user.id, email: user.email })
    } else {
        resp.status(400);
        throw new Error("User data is not valid");
    }
})

//@desc Login the User
//@route /api/user
//@access public
const loginUser = asyncHandler(async (req, resp) => {
    const { email, password } = req.body;
    if (!email || !password) {
        resp.status(400);
        throw new Error("All fields are mandatory !!");
    }

    const user = await User.findOne({ email });
    // Compare the password one store in db and one user entering
    if (user && await bycrypt.compare(password, user.password)) {
        const token = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_SECRECT_KEY, { expiresIn: "15m" })


        resp.status(200).json({ token })
    } else {
        resp.status(401);
        throw new Error("Email or password is not valid");
    }
})

//@desc Get the Current User
//@route /api/user
//@access private
const getCurrentUser = asyncHandler(async (req, resp) => {
    resp.status(200).json(req.user);
})
module.exports = { registerUser, loginUser, getCurrentUser }