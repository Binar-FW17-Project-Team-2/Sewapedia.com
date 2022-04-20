const {Payment, RentedProduct, Product, Sequelize} = require('../../models');

module.exports = async (req, res) => {
  try {
    const now = Date.now();
    const hari = 24 * 60 * 60 * 1000;
    const payment = await Payment.findOne({where: {id: req.params.id}});
    if (payment.status === 'success') return res.status(200).json([1, {
      message: 'sudah dibayar'
    }])
    await Payment.update({
      status: 'success'
    }, {
      where: {id: req.params.id}
    });
    await Product.update({
      stock: Sequelize.literal(`stock - 1`)
    }, {
      where: {id: payment.productId}
    });
    await RentedProduct.create({
      userId: payment.userId,
      productId: payment.productId,
      rentalDate: now,
      returnDate: now + payment.lamaSewa * hari
    })
    res.status(200).json([1, {message: 'pembayaran telah terkonfirmasi'}])
  } catch (error) {
    res.status(500).json([0, {message: 'pembayaran gagal'}])
  }
}