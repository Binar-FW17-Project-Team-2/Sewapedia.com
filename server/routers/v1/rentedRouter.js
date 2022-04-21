const rented = require('express').Router()
const { getRentedProducts, deleteRentedProductById } = require('../../controller/rented-product')
const { isAuthenticated, roleAuthorization } = require('../../middleware')

rented.use(isAuthenticated)
rented.use(roleAuthorization())
rented.get('/', getRentedProducts)
rented.delete('/:id', deleteRentedProductById)


module.exports = rented