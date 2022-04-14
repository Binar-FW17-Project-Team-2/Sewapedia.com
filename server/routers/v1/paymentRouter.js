const payment = require('express').Router();
const { createPayment, getPayments } = require('../../controller/payment');
const { isAuthenticated, isAuthorized } = require('../../middleware')

payment.use(isAuthenticated)
payment.post('/', createPayment)
payment.use(isAuthorized([{role: 'admin'}, {role:'user', sameUser: true}]))
payment.use('/', getPayments)

module.exports = payment;