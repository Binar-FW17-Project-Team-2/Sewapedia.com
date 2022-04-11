const { User } = require('../../models')

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
        const wishlistData = viewWishlist[0].product_wishlist.map((e) => {return e.name})
        if(wishlistData.length == 0) return res.status(500).json({message: 'id not found'})
        return res.status(200).json({wishlistData})
    } catch (error) {
        res.status(500).json({message: 'Internal Server ERROR'})
    }
}