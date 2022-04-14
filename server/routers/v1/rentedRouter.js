const rented = require('express').Router()
const { getRentedProducts, getRentedProductByUserId } = require('../../controller/rented-product')
const { isAuthenticated, isAuthorized } = require('../../middleware')

rented.use(isAuthenticated)
rented.use(isAuthorized([{sameUser: true}]))
rented.get('/', getRentedProducts)
rented.get('/user', getRentedProductByUserId)

module.exports = rented