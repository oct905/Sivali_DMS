const CompanyPartnerController = require('../controllers/companyPartnerController');

const companyPartnerRouter = require('express').Router();

companyPartnerRouter.patch('/', CompanyPartnerController.update)

module.exports = companyPartnerRouter;