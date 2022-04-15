const {Payment} = require('../../models');

module.exports = async (req, res) => {
  try {
    const payment = await Payment.findOne({
      where: {id: req.params.id}
    })
    payment
      ? res.status(200).json([1, payment])
      : res.status(200).json([0, payment])
  } catch (error) {
    res.status(500).json({message: 'Internal server ERROR'})
  }
}