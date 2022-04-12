const { User, Product } = require('../../models')

module.exports = async(req,res) => {
    try {        
        const userId  = req.query.userId
        const viewWishlist = await User.findAll({
            include:{
                model: Product,
                as: 'product_wishlist'
            },
            where: {
                id: userId
            }
        })
        const wishlistData = viewWishlist[0].product_wishlist
        if(wishlistData.length == 0) return res.status(400).json({message: 'wishlist is not created yet'})
        return res.status(200).json({wishlistData})
    } catch (error) {
        console.log(error)
    }
}