const {Payment, User, Product, Biodata} = require('../../models');

module.exports = async (req, res) => {
  try {
    const payment = await Payment.findOne({
      where: {id: req.params.id},
      include: [{
        model: User,
        include: {
          model: Biodata,
          as: 'Biodata',
        }
      }, {
        model: Product
      }]
    })
    payment
      ? res.status(200).json([1, payment])
      : res.status(200).json([0, payment])
  } catch (error) {
    res.status(500).json({message: 'Internal server ERROR'})
  }
}