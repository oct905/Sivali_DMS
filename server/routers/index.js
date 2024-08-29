const express = require('express');
const errorHandler = require('../middlewares/errorHandler');
const authentication = require('../middlewares/authentication');
const companyPartnerAuthRouter = require('./companyPartnerAuthRouter');
const companyPartnerRouter = require('./companyPartnerRouter');
const router = express.Router();

router.use('/company', companyPartnerAuthRouter)
router.use(authentication)

router.use('/company', companyPartnerRouter)

router.use(errorHandler)

module.exports = router;