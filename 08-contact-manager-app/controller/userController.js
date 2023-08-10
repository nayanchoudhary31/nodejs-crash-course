const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bycrypt = require('bcrypt');
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
    resp.status(200).json({ message: `Login User` })
})

//@desc Get the Current User
//@route /api/user
//@access public
const getCurrentUser = asyncHandler(async (req, resp) => {
    resp.status(200).json({ message: `Current User` })
})
module.exports = { registerUser, loginUser, getCurrentUser }