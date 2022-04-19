module.exports = async (req, res, next) => {
  res
    .cookie('token', '', {maxAge: 1})
    .set('Access-Control-Allow-Origin', 'http://localhost:3000')
    .status(200).json([1, {message: 'logged out'}])
}