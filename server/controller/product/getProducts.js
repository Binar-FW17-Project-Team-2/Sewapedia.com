const { Product } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message: 'Internal Server ERROR'})
  }
}