const Joi = require('joi')

const email = Joi.string()
const password = Joi.string().min(5)
const role = Joi.string()

const registerUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required()
})

const loginUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
})

module.exports = { registerUserSchema, loginUserSchema }