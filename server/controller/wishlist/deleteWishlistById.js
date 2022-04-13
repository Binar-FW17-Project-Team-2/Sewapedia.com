const { Wishlist } = require('../../models')

module.exports = async(req,res) => {
    try {
        const userId = req.query.userId
        const productId = req.body.productId
        const deleteWishlist = Wishlist.destroy({
            where: {
              userId: userId,
              productId: productId
            }
        })
        return res.status(200).json([1, {message: 'delete success'}])
    } catch (error) {
        res.status(500).json({message: 'internal server error'})
    }
}