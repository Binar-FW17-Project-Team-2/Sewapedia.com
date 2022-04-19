const rented = require('express').Router()
const { getRentedProducts } = require('../../controller/rented-product')
const { isAuthenticated, roleAuthorization } = require('../../middleware')

rented.use(isAuthenticated)
rented.use(roleAuthorization())
rented.get('/', getRentedProducts)


module.exports = rented