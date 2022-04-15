const auth = require('express').Router()
const { login, logout, forgotPassword, resetPassword } = require('../../controller/authentication')
const AuthController = require('../../controller/authentication/signUp')


auth.post('/login', login)
auth.get('/logout', logout)
auth.post('/forgotpw', forgotPassword)
auth.post('/resetpw', resetPassword)
auth.post('/signup', AuthController.register)

module.exports = auth