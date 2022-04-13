const { User, Biodata } = require('../../models')

class AuthController {
    static async register(req, res) {
        try {
            const { email, password } = req.body
            if (!email) res.status(400).json({ message: "please input email" })
            const isEmailExist = await User.findOne({ where: { email } })
            if (isEmailExist) {
                res.status(409).json({ message: 'email alrady take' })
            }
            return await User.create({
                email, password
            }).then(data => {
                Biodata.create({
                    userId: data.id,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    address: req.body.address
                })
                res.status(200).json({ data })
            }).catch(error => {
                throw new Error(error)
            })
        } catch (error) {
            // implement errorHandler nanti refferencenya dikasih
            // biar si servernya gk mati, jgn pake throw new Error
            throw new Error(error)
        }
    }
}

module.exports = AuthController