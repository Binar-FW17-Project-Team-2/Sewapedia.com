const product = require('express').Router()
const { getProducts, addProduct, updateProductById } = require('../../controller/product')

product.post('/', addProduct)
product.get('/', getProducts)
product.put('/update/:id', updateProductById)


module.exports = product