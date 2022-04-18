const { RentedProduct } = require('../../models')

module.exports = async (req, res) => {
    try {
        const id = req.params.id
        const deleteRentedProduct = await RentedProduct.destroy({ where: {id:id}})
        if (!deleteRentedProduct) res.status(500).json({ message: 'not found' })
        return res.status(200).json({ message: 'berhasil dihapus' })
    } catch (error) {
        res.status(500).json({ message: 'internal server error' })
    }
}