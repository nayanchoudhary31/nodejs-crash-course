const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"]
    },

    email: {
        type: String,
        required: [true, "Please add the contact email"]
    },

    phone: {
        type: String,
        required: [true, "Please add the contact phone"]
    }
}, {
    timestamp: true
})

module.exports = mongoose.model("Contact", contactSchema);