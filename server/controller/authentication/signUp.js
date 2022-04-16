const { User, Biodata } = require('../../models')
const { validationHandler } = require('../../utils/validationHandler')

class AuthController {
    static async register(req, res) {
        try {
            const { email, password } = req.body
            const isEmailExist = await User.findOne({ where : {email}})
            if (isEmailExist) return res.status(400).json({ message: 'Email already taken'})

            const payload = { email, password }
            const user = await User.create(payload)
            const biodata = await Biodata.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                address: req.body.address,
                userId: user.id
            })
            return res.status(201).json({ message: 'user created' })
        } catch (error) {
            res.status(400).json({error})
        }
    }
}
module.exports= AuthController
