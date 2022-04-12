const { Wishlist } = require('../../models')

module.exports = async(req,res) => {
    try {
        const id = req.params.id
        const deleteWihlist = Wishlist.destroy({
            where: {
                id: id
            }
        })
        if(!deleteWihlist) return res.status(400).json([0,{message: 'this user does not have wishlist'}])
        return res.status(200).json([1, {message: 'delete success'}])
    } catch (error) {
        res.status(500).json({message: 'internal server error'})
    }
}