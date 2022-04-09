const product = require('express').Router()
const { getProducts, addProduct } = require('../../controller/product')

product.post('/', addProduct)
product.get('/', getProducts)

module.exports = product