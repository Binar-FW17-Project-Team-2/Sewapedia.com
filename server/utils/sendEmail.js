require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
})

const sendReceipt = (to, payment) => {
  return {
    from: process.env.EMAIL,
    to: to,
    subject: 'send receipt',
    html: `
      <p> cara membayar <p>
      <ol>
        <li> pergi ke gerai terdekat!!!</li>
        <li> tunjukkan id ke admin </li>
        <li> bayar sesuai harga dibawah </li>
        <li> ambil barang yg anda sewa </li>
      </ol>
      <h4>id pembayaran:${payment.id}<h4>
      <h4>harga: ${payment.totalPrice}<h4>
    `
  }
}

module.exports = {transporter, sendReceipt}
  