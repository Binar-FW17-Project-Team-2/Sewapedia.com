const v1 = require('express').Router();
const product = require('./productRouter')
const auth = require('./authRouter')
const wishlist = require('./wishlistRouter')

v1.use('/', auth)
v1.use('/product', product)
v1.use('/wishlist', wishlist)

module.exports = v1