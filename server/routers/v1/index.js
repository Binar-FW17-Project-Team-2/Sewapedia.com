const authRouter = require('./authRouter');

const v1 = require('express').Router();

v1.get('/', (req, res) => res.send('ok'));

v1.use("/auth", authRouter);

module.exports = v1