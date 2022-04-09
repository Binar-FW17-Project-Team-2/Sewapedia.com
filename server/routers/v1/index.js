const v1 = require('express').Router();
const product = require('./productRouter')

v1.use('/product', product)

module.exports = v1