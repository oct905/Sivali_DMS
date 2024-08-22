
const errorHandler = (error, req, res, next) => {
    console.log(error, `<<< ERROR HANDLER`);
    let status = 500
    let msg = `Internal Server Error`
    if (error.status) {
        status = error.status
    }

    res.status(status).json({
        status
    })
}

module.exports = errorHandler