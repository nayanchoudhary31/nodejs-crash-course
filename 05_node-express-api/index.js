require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001


app.get('/', (req, resp) => {
    resp.json({ message: "Welcome to the homepage" })
})

app.get('/users', (req, resp) => {
    resp.json({ message: "Get all the users" })
})

app.get('/users/:id', (req, resp) => {
    resp.json({ message: `Get user with userId ${req.params.id}` })

})
app.post("/users/", (req, resp) => {
    resp.json({ message: "Create new user" })
})

app.put("/users/:id", (req, resp) => {
    resp.json({ message: `User updated with userId ${req.params.id}` })
})

app.delete("users/:id", (req, resp) => {
    resp.json({ message: `User deleted with userId ${req.params.id}` })
})
app.listen(PORT, () => {
    console.log(`Server in up and running on ${PORT}`);
})