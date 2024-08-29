const CompanyPartnerAuthController = require('../controllers/companyPartnerAuthController');
const companyPartnerAuthRouter = require('express').Router();
const upload = require(`../utils/multer`)
const uploadMiddleware = upload.single(`image`)

companyPartnerAuthRouter.post('/register', uploadMiddleware, CompanyPartnerAuthController.register)
companyPartnerAuthRouter.post('/login', CompanyPartnerAuthController.login)

module.exports = companyPartnerAuthRouter;