const payment = require('express').Router();
const { createPayment, getPayments } = require('../../controller/payment');
const { isAuthenticated, roleAuthorization } = require('../../middleware');

payment.use(isAuthenticated)
payment.post('/', createPayment)
payment.use(roleAuthorization())
payment.use('/', getPayments)

module.exports = payment;