const { User, Biodata } = require('../models')
const { hashPassword, verifyPassword } = require('../helpers/passwordHandler')
const { generateToken } = require('../helpers/tokenHandler')

class AuthController {
    static register = async (req, res) => {
        try {
            const { email, password, role } = req.body
            const isEmailExist = await User.findOne({ where: { email }})
            if (isEmailExist) return res.status(409).json({ message: "Email already used"})

            const payload = {
                email, password: hashPassword(password), role
            }
            const user = await User.create(payload)

            if (user) {
                const biodata = await Biodata.create({ userId: user.id })
                if (biodata) {
                    return res.status(201).json({
                        email: user.email,
                        role: user.role,
                        biodata
                      })
                }
            } else if (!user) {
                res.status(400).json({ message: "bad request"})
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}


module.exports = AuthController