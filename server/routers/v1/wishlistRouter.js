const wishlist = require('express').Router()
const { createWishlist } = require('../../controller/wishlist')

wishlist.post('/', createWishlist)

module.exports = wishlist