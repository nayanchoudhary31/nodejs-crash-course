const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your username"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: [true, "Email already taken"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"]
    }
}, { timestamp: true })

module.exports = mongoose.model("User", userSchema);