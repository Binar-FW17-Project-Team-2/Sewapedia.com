const auth = require('express').Router()
const { login, logout } = require('../../controller/authentication')

auth.post('/login', login)
auth.get('/logout', logout)

module.exports = auth