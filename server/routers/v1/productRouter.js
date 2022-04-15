const product = require('express').Router()
const { 
  getProducts, 
  addProduct, 
  updateProductById, 
  deleteProductById,
  getListCategory
} = require('../../controller/product')
const { isAuthenticated, roleAuthorization} = require('../../middleware')

product.get('/', getProducts)
product.get('/category', getListCategory)
product.use(isAuthenticated, roleAuthorization('admin'))
product.post('/', addProduct)
product.put('/:id', updateProductById)
product.delete('/:id', deleteProductById)

module.exports = product