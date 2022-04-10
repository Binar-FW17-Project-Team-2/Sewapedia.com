const AuthController = require("../../controller/authController");
const { validatorHandler } = require("../../middleware/validatorJoi");
const { registerUserSchema, loginUserSchema } = require("../../validationSchema/authSchema");
const authRouter = require('express').Router()


authRouter.post("/register", validatorHandler(registerUserSchema, "body"), AuthController.register )


module.exports = authRouter