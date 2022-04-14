const v1 = require('express').Router();
const product = require('./productRouter')
const auth = require('./authRouter')
const wishlist = require('./wishlistRouter')
const payment = require('./paymentRouter')
const rented = require('./rentedRouter')

v1.use('/', auth)
v1.use('/product', product)
v1.use('/wishlist', wishlist)
v1.use('/payment', payment)
v1.use('/rented', rented)

module.exports = v1