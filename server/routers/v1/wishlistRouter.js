const wishlist = require('express').Router()
const { createWishlist, viewWilshlistById } = require('../../controller/wishlist')

wishlist.post('/', createWishlist)
wishlist.get('/', viewWilshlistById)

module.exports = wishlist