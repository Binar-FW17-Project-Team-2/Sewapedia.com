const authRouter = require('express').Router()
const AuthController = require("../../controller/authController");
const { validatorHandler } = require("../../middleware/validatorJoi");
const { login, logout } = require('../../controller/authentication')
const { registerUserSchema, loginUserSchema } = require("../../validationSchema/authSchema");


authRouter.post("/register", validatorHandler(registerUserSchema, "body"), AuthController.register)


authRouter.post('/login', login)
authRouter.get('/logout', logout)

module.exports = auth
