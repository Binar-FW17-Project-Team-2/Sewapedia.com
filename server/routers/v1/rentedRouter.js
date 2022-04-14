const rented = require('express').Router()
const { getRentedProducts } = require('../../controller/rented-product')
const { isAuthenticated, isAuthorized } = require('../../middleware')

rented.use(isAuthenticated)
rented.use(isAuthorized([{role: 'admin'}, {role:'user', sameUser: true}]))
rented.get('/', getRentedProducts)


module.exports = rented