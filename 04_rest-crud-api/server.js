require('dotenv').config();
const http = require('http');
const movies = require('./data/movie.json');
const getReq = require('./methods/getRequest');
const postReq = require('./methods/postRequest');
const putReq = require('./methods/putRequest');
const deleteReq = require('./methods/deleteRequest');

const PORT = process.env.PORT || 4000
const server = http.createServer((req, resp) => {
    req.movies = movies;

    switch (req.method) {
        case "GET":
            getReq(req, resp)
            break;
        case "POST":
            postReq(req, resp)
            break;
        case "PUT":
            putReq(req, resp);
            break;
        case "DELETE":
            deleteReq(req, resp);
            break;
        default:
            resp.setHeader("Content-Type", "application/json");
            resp.statusCode = 400;
            resp.write(JSON.stringify({ title: "Not Found", message: "Route Not Found !" }));
            resp.end();
    }


});


server.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`)
})