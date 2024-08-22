const authRouter = require('express').Router();
const AuthController = require('../controllers/authController');

authRouter.post('/login', AuthController.loginCompany)
authRouter.post('/register', AuthController.registerCompany)

module.exports = authRouter;