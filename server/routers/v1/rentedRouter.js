const rented = require('express').Router()
const { getRentedProducts } = require('../../controller/rented-product')

rented.get('/', getRentedProducts)

module.exports = rented