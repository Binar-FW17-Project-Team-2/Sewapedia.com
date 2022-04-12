const product = require('express').Router()
const { 
  getProducts, 
  addProduct, 
  updateProductById, 
  deleteProductById,
  getListCategory
} = require('../../controller/product')
const { isAuthenticated, isAuthorized} = require('../../middleware')

product.get('/', getProducts)
product.get('/category', getListCategory)
product.use(isAuthenticated, isAuthorized([{role: 'admin'}]))
product.post('/', addProduct)
product.put('/:id', updateProductById)
product.delete('/:id', deleteProductById)

module.exports = product