const { constant } = require("../constant");

const errorHandler = (err, req, resp, next) => {
    const statusCode = resp.statusCode ? resp.statusCode : 500;

    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            resp.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constant.UNAUTHORIZED:
            resp.json({
                title: "Unauthorized Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constant.FORBIDDEN:
            resp.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constant.NOT_FOUND:
            resp.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constant.SERVER_ERROR:
            resp.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log(`No Error all good !`);
            break;
    }
}

module.exports = errorHandler