const { Wishlist } = require('../../models')
const { validationHandler } = require('../../utils')

module.exports = async(req,res) => {
    try {
        const userId = req.user.id
        const productId = req.body.productId
        const createWishlist = await Wishlist.create({userId, productId})
        res.status(201).json({message:'success adding wishlist', data: createWishlist})
    } catch (err) {
        const error = validationHandler(err)
        error ? res.status(400).json(error) : res.status(500).json({message: 'Internal Server Error'})
    }
}