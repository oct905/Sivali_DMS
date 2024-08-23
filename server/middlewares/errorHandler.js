
const errorHandler = (error, req, res, next) => {
    let status = error.status || 500
    let message = error.message || `Internal Server Error`

    if (error.errors) {
        const errors = error?.errors[0]
        console.log(errors, `<<< ERROR HANDLER`);

        message = errors.message || message
    }
    console.log(message, `<<< ERROR HANDLER`);
    res.status(status).json({
        message
    })
}

module.exports = errorHandler