const { User } = require('../../models')

module.exports = async (req, res) => {
    try {
        const data = await User.findAll({
            order: [["id", 'ASC']]})
        res.status(200).json({data})
    } catch(error) {
        res.status(500).json({ message: 'internal server error' })
    }
}