const { Product } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const {limit, offset, category} = req.query;
    const products = await Product.findAndCountAll({
      where: category? {category} : {},
      limit: limit || null,
      offset: offset || null
    })
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message: 'Internal server ERROR'})
  }
}