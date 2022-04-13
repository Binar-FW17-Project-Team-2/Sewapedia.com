const { User, Biodata } = require('../../models')
const { validationHandler } = require('../../utils/validationHandler')

class AuthController {
    static async register (req, res) {
        try {
            const { email, password } = req.body
            const isEmailExist = await User.findOne({ where: { email }})
            if (isEmailExist){
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
            }).catch(err => {
                const error = validationHandler(err)
                error ? res.status(400).json(error) : res.status(500).json({message: 'Internal Server Error'})
            })
        } catch (error) {
            error ? res.status(400).json(error) : res.status(500).json({message: 'Internal Server Error'})
        }
    }
}   

module.exports= AuthController