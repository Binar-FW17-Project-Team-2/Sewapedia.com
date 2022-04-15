const auth = require('express').Router()
const AuthController = require('../../controller/authentication/signUp')
const { login, logout } = require('../../controller/authentication')


auth.post('/login', login)
auth.get('/logout', logout)
auth.post('/signup', AuthController.register)

module.exports = auth