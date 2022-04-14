const { User } = require('../../models')

module.exports = async(req,res) => {
    try {
        const rentedProduct = await User.findAll({
            include: 'product_rented'
        })
        let rented_product = []
        const rented = rentedProduct.forEach(e => e.product_rented.forEach(x => rented_product.push(x)))
        res.status(200).json({rented_product}) 
    } catch (error) {
        console.log(error)
    }
}