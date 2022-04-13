const { Product, Payment } = require('../../models')
const {validationHandler} = require('../../utils');
const { transporter, sendReceipt } = require('../../utils/sendEmail');

module.exports = async (req, res) => {
  try {
    const {id, email} = req.user
    const { productId, lamaSewa } = req.body;
    const product = await Product.findOne({where: {id: productId}});
    const totalPrice = product.price * lamaSewa;
    const payment = await Payment.create({userId: id, productId, lamaSewa, totalPrice});
    const info = await transporter.sendMail(sendReceipt(email, payment));
    res.status(200).json([1, {info, payment}])
  } catch (err) {
    const error = validationHandler(err);
    error
      ? res.status(400).json(error)
      : res.status(500).json({message: 'Internal server ERROR'})
  }
}