const express = require('express');
const errorHandler = require('../middlewares/errorHandler');
const authRouter = require('./auth');
const authentication = require('../middlewares/authentication');
const overtimeRouter = require('./overtime');
const leaveRouter = require('./leave');
const permitRouter = require('./permit');
const router = express.Router();


router.use("/company", authRouter)

router.use(authentication)

router.use("/overtime", overtimeRouter)
router.use("/leave", leaveRouter)
router.use("/permit", permitRouter)

router.use(errorHandler)

module.exports = router;