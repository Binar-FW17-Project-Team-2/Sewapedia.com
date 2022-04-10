const product = require('express').Router()
const { getProducts, addProduct, updateProductById, deleteProductById } = require('../../controller/product')

product.post('/', addProduct)
product.get('/', getProducts)
product.put('/update/:id', updateProductById)
product.delete('/delete/:id', deleteProductById)

module.exports = product