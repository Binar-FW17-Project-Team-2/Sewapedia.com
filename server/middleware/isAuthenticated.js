const { verifyToken } = require("../utils/tokenHandler");

module.exports = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) res.status(401).json({message: 'Unauthorized'});
    const data = verifyToken(token);
    if (!data) res.status(401).json({message: 'Unauthorized'});
    req.user = data;
    next();
  } catch (error) {
    res.status(500).json({message: 'Internal server ERROR'})
  }
}