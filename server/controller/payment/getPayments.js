const { Payment } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const {limit, offset, userId} = req.query;
    const payments = await Payment.findAndCountAll({
      where: userId? {userId} : {},
      limit: limit || null,
      offset: offset || null
    })
    res.status(200).json(payments)
  } catch (error) {
    res.status(500).json({message: 'Internal server ERROR'})
  }
}