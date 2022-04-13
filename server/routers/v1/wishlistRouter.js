const wishlist = require('express').Router()
const { createWishlist, viewWilshlistById, deleteWishlistById } = require('../../controller/wishlist')
const { isAuthenticated, isAuthorized } = require('../../middleware')

wishlist.use(isAuthenticated)
wishlist.post('/', createWishlist)
wishlist.use(isAuthorized([{sameUser: true}]))
wishlist.get('/', viewWilshlistById)
wishlist.delete('/', deleteWishlistById)

module.exports = wishlist