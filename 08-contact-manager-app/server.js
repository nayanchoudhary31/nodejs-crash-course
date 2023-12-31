const express = require('express');
require('dotenv').config()
const app = express();
const contactRoutes = require('./routes/contactsRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnect');
const PORT = process.env.PORT || 5000

connectDb();
app.use(express.json());

app.use("/api/contacts", contactRoutes);
app.use("/api/user", userRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})