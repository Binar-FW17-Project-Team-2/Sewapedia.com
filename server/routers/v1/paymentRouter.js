const payment = require('express').Router();

const { createPayment, getPayments, updatePayment, getPaymentById } = require('../../controller/payment');
const { isAuthenticated, roleAuthorization } = require('../../middleware')

payment.use(isAuthenticated)
payment.post('/', createPayment)
payment.put('/:id', roleAuthorization('admin'), updatePayment)
payment.use(roleAuthorization())
payment.get('/', getPayments)
payment.get('/:id', getPaymentById)

module.exports = payment;