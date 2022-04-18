const user = require('express').Router()
const { isAuthenticated, isAuthorized } = require('../../middleware')
const { getUsers, getUserById, editUser } = require('../../controller/user')

user.use(isAuthenticated)
user.use(isAuthorized([{role: 'admin'}, {role:'user'}]))
user.post('/edit', editUser)

module.exports = user