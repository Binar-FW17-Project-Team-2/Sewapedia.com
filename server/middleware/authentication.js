const { User } = require('../models')
const { verifyToken } = require('../helpers/tokenHandler')

module.exports = async (req, res, next) => {
    try {
        const { access_token } = req.cookies;
        if (access_token) {
            const decodedData = await verifyToken(access_token)
            const findUser = await User.findOne({
                where: {
                    email: decodedData.email
                }
            })
            if (!findUser) {
                return res.status(404).json({ message: "user not found" })
            }
            req.user = decodedData
            next()
        } else {
            return res.status(404).json({ message: "token not found" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "ada error"})
    }
}