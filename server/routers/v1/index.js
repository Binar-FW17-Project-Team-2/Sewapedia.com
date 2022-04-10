const v1 = require('express').Router();
const product = require('./productRouter')
const auth = require('./authRouter')

v1.use('/', auth)
v1.use('/product', product)

module.exports = v1