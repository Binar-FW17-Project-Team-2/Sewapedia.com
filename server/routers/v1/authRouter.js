const auth = require('express').Router()
const { login, logout } = require('../../controller/authentication')
const AuthController = require('../../controller/authentication/signUp')

auth.post('/login', login)
auth.post('/signup', AuthController.register)
auth.get('/logout', logout)

module.exports = auth