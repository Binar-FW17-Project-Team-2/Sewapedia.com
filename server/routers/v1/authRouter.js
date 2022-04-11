const auth = require('express').Router()
const { login } = require('../../controller/authentication')
const AuthController = require('../../controller/authentication/signUp')

auth.post('/login', login)
auth.post('/signup', AuthController.register)

module.exports = auth