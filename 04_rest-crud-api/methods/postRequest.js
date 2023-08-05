const crypto = require('crypto');
const bodyparser = require('../utils/body-parser');
const writeFile = require('../utils/write-file');
module.exports = async (req, resp) => {

    if (req.url === "/api/movies/") {
        try {
            let body = await bodyparser(req);
            body.id = crypto.randomUUID();
            req.movies.push(body);
            writeFile(req.movies)
            resp.writeHead(201, { "Content-Type": "application/json" });
            resp.end();

        } catch (error) {
            console.log(error);
            resp.writeHead(400, { "Content-Type": "application/json" });
            resp.end(JSON.stringify({ title: "Validation Failed", message: "Request body in not valid" }))
        }

    } else {
        resp.writeHead(404, { "Content-Type": "application/json" });
        resp.end(JSON.stringify({ title: "Not Found", message: "Route Not Found" }))
    }

}