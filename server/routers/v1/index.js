const v1 = require('express').Router();
const product = require('./productRouter')
const auth = require('./authRouter')
const wishlist = require('./wishlistRouter')
const payment = require('./paymentRouter')

v1.use('/', auth)
v1.use('/product', product)
v1.use('/wishlist', wishlist)
v1.use('/payment', payment)

module.exports = v1