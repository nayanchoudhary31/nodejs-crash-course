const express = require('express');
const { registerUser, loginUser, getCurrentUser } = require('../controller/userController');
const validateToken = require('../middleware/validationHandler');
const router = express.Router();

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/current", validateToken, getCurrentUser)

module.exports = router;