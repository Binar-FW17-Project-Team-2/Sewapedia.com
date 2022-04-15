const product = require('express').Router()
const { 
  getProducts, 
  addProduct, 
  updateProductById, 
  deleteProductById,
  getListCategory,
  getProductById
} = require('../../controller/product')
const { isAuthenticated, isAuthorized} = require('../../middleware')

product.get('/', getProducts)
product.get('/category', getListCategory)
product.use(isAuthenticated, isAuthorized([{role: 'admin'}]))
product.post('/', addProduct)
product.get('/:id', getProductById)
product.put('/:id', updateProductById)
product.delete('/:id', deleteProductById)

module.exports = product