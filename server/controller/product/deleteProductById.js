const { Product } = require('../../models')
const { validationHandler } = require('../../utils')

module.exports = async(req, res, next) => {
    try {
        const id = req.params.id
        const deleteProductById = await Product.destroy({
            where: {
                id: id
            }
        })
        const updatedData = await Product.findAll()
        res.status(201).json({message:'Delete success', data: updatedData})
    } catch (err) {
        const error = validationHandler(err)
        error ? res.status(400).json(error) : res.status(500).json({message: 'Internal Server Error'})
    }
}