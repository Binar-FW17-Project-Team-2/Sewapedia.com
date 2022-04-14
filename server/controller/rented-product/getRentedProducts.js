const { RentedProduct, User, Product } = require('../../models')

module.exports = async(req,res) => {
    try {
        const rentedProduct = await RentedProduct.findAll({
            include: [
                {
                    model: User,
                    as: 'tenant',
                    attributes: ['email', 'img_url']
                },
                {
                    model: Product,
                    as: 'rentedProduct',
                    attributes: ['name', 'img_url']
                }
            ]
        })
        res.status(200).send(rentedProduct) 
    } catch (error) {
        console.log(error)
    }
}