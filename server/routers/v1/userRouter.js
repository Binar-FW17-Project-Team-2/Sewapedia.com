const user = require('express').Router()
const { isAuthenticated, roleAuthorization } = require('../../middleware')
const { getUsers, getUserById } = require('../../controller/user')

user.use(isAuthenticated)
user.get('/', getUsers)
user.get('/:id', getUserById)

module.exports = user