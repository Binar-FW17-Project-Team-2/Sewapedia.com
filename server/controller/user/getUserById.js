const { User } = require('../../models')

module.exports = async (req, res) => {
    try {
        const id = req.params.id
        const data = await User.findByPk(id)
        res.status(200).json(data)
    } catch(error) {
        res.status(500).json({ message: 'internal server error' })
    }
}