const v1 = require('express').Router();

v1.get('/', (req, res) => res.send('ok'))

module.exports = v1