
const errorHandler = (error, req, res, next) => {
    let status = 500
    let message = `Internal Server Error`
    if (error.status) {
        status = error.status
        message = error.message
    } else if (error.name === "SequelizeUniqueConstraintError") {
        status = 400
        message = error.message
    }
    console.log(error, "error handler <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

    res.status(status).json({
        message
    })
}

module.exports = errorHandler