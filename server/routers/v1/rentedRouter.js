const rented = require('express').Router()
const { getRentedProducts, deleteByIdRentedProduct } = require('../../controller/rented-product')
const { isAuthenticated, roleAuthorization } = require('../../middleware')

rented.use(isAuthenticated)
rented.use(roleAuthorization())
rented.get('/', getRentedProducts)
rented.delete('/:id', deleteByIdRentedProduct)

module.exports = rented