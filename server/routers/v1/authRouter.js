const auth = require('express').Router()
const { login, logout, forgotPassword, resetPassword } = require('../../controller/authentication')

auth.post('/login', login)
auth.get('/logout', logout)
auth.post('/forgotpw', forgotPassword)
auth.post('/resetpw', resetPassword)

module.exports = auth