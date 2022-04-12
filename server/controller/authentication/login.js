const { User } = require('../../models');
const bcrypt = require('bcrypt');
const { createToken, maxAge } = require('../../utils/tokenHandler');

module.exports = async (req, res, next) => {
  try {
    var {email, password} = req.body;
    const user = await User.findOne({
      where: { email },
      include: 'Biodata'
    });
    if (!user) throw [0, {email: 'invalid email'}];
    const auth = await bcrypt.compare(password, user.password);
    if(!auth) throw [0, {password: 'invalid password'}];
    var { password, ...userWithoutPw } = user.dataValues
    const token = createToken(userWithoutPw);
    res.cookie('token', token, {
      maxAge: maxAge * 1000, httpOnly: true
    })
    res.status(200).json([1, userWithoutPw])
  } catch (error) {
    if (!error[0]) res.status(400).json(error.message);
    else res.status(500).json({message: 'Internal server ERROR'});
  }
} 