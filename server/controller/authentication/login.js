const { User, Biodata } = require('../../models');
const bcrypt = require('bcrypt');
const { createToken, maxAge } = require('../../utils/tokenHandler');

module.exports = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      attributes: ['email', 'id', 'img_url', 'role', 'password'],
      include: {
        model: Biodata,
        as: 'Biodata',
        attributes: ['firstName', 'lastName']
      }
    });
    if (!user) throw [0, {email: 'invalid email'}];
    const { password, ...payload } = user.dataValues;
    const auth = await bcrypt.compare(req.body.password, password);
    if(!auth) throw [0, {password: 'invalid password'}];
    const token = createToken(payload);
    res
    .cookie('token', token, {
      maxAge: maxAge * 1000, httpOnly: true
    })
    .set('Access-Control-Allow-Origin', 'http://localhost:3000')
    .status(200).json([1, payload])
  } catch (error) {
    if (!error[0]) res.status(400).json(error);
    else res.status(500).json({message: 'Internal server ERROR'});
  }
} 
