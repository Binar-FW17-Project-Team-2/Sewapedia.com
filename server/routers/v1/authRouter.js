const auth = require('express').Router()
const { login } = require('../../controller/authentication')

auth.post('/login', login)

module.exports = auth