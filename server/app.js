if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const cors = require("cors")
const express = require('express');
const router = require('./routers');
const { limiter } = require("./utils/limiter");

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(limiter)
app.use(router)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});