const payment = require('express').Router();
const { createPayment, getPayments, updatePayment, getPaymentById } = require('../../controller/payment');
const { isAuthenticated, isAuthorized } = require('../../middleware')

payment.use(isAuthenticated)
payment.post('/', createPayment)
payment.use(isAuthorized([{role: 'admin'}, {role:'user', sameUser: true}]))
payment.get('/', getPayments)
payment.get('/:id', getPaymentById)
payment.put('/:id', isAuthorized([{role:'admin'}]), updatePayment)

module.exports = payment;