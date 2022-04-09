const product = require('express').Router()
const { getProducts } = require('../../controller/product')

product.get('/', getProducts)

module.exports = product