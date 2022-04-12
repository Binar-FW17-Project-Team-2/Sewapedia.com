const wishlist = require('express').Router()
const { createWishlist, viewWilshlistById, deleteWishlistById } = require('../../controller/wishlist')
const { isAuthenticated, isAuthorized } = require('../../middleware')

wishlist.use(isAuthenticated)
// wishlist.use(isAuthorized([{sameUser: true}]))
wishlist.post('/', createWishlist)
wishlist.get('/', viewWilshlistById)
wishlist.delete('/:id', deleteWishlistById)

module.exports = wishlist