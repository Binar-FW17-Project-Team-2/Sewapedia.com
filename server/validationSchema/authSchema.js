const Joi = require('joi')

const email = Joi.string()
const password = Joi.string().min(5)
const firstName = Joi.string()
const lastName = Joi.string()
const address = Joi.string()

const registerUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  firstName: firstName.required(),
  lastName: lastName.required(),
  address: address.required()
})

const loginUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
})

module.exports = { registerUserSchema, loginUserSchema }