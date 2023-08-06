const writeFile = require("../utils/write-file");

module.exports = (req, resp) => {
    //Get the base url & uuid 
    const baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    // get the regular exp
    const regexV4 = new RegExp(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/)
    const id = req.url.split('/')[3];
    if (!regexV4.test(id)) {
        resp.writeHead(400, "Content-Type", "application/json");
        resp.end(JSON.stringify({ title: "Validation Failed", message: " UUID is not valid !" }))
    } else if (baseUrl === "/api/movies/" && regexV4.test(id)) {

        //Find the index of the movie that need to be deleted
        const index = req.movies.findIndex((movie) => {
            return movie.id === id;
        })

        if (index === -1) {
            resp.statusCode = 404;
            resp.write(JSON.stringify({ title: "Not Found", message: "Movie not found" }));
            resp.end()
        } else {
            req.movies.splice(index, 1);
            writeFile(req.movies);
            resp.writeHead(204, { "Content-Type": "application/json" });
            resp.end(JSON.stringify(req.movies))
        }

    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
    }
}