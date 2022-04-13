module.exports = async (req, res, next) => {
  res.cookie('token', '', {maxAge: 1})
  res.status(200).json([1, {message: 'logged out'}])
}