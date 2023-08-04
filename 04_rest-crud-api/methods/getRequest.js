module.exports = (req, resp) => {
    //Get the base url & uuid 
    const baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    // get the regular exp
    const regexV4 = new RegExp(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/)

    const id = req.url.split('/')[3];
    if (req.url === "/api/movies") {
        resp.statusCode = 200;
        resp.setHeader("Content-Type", "application/json");
        resp.write(JSON.stringify(req.movies));
        resp.end();
    } else if (!regexV4.test(id)) {
        resp.writeHead(400, "Content-Type", "application/json");
        resp.end(JSON.stringify({ title: "Validation Failed", message: " UUID is not valid !" }))
    } else if (baseUrl === "/api/movies/" && regexV4.test(id)) {
        resp.setHeader("Content-Type", "application/json");
        let filterMovie = req.movies.filter((movie) => {
            return movie.id == id;
        })

        if (filterMovie.length > 0) {
            resp.statusCode = 200;
            resp.write(JSON.stringify(filterMovie));
            resp.end();
        } else {
            resp.statusCode = 404;
            resp.write(JSON.stringify({ title: "Not Found", message: "Movie not found" }))
            resp.end();
        }
    } else {
        resp.writeHead(404, { "Content-Type": "application/json" })
        resp.end(JSON.stringify({ title: "Not Found", message: "Route Not Found" }));
    }
}