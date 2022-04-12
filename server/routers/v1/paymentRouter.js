const payment = require('express').Router();
const { createPayment } = require('../../controller/payment');
const { isAuthenticated } = require('../../middleware')

payment.use(isAuthenticated)
payment.post('/', createPayment)

module.exports = payment;