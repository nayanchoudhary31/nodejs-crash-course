const express = require('express');
require('dotenv').config()
const app = express();
const contactRoutes = require('./routes/contactsRoutes');
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use("/api/contacts",contactRoutes);
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server running on port : ${PORT}`);
})