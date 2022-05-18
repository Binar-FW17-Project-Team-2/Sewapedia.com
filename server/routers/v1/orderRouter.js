const order = require('express').Router()
const { createOrderItem, createOrder } = require('../../controller/order')
const { isAuthenticated } = require('../../middleware')

order.use(isAuthenticated)
order.post('/item', createOrderItem)
order.post('/', createOrder)

module.exports = order