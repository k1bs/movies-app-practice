const express = require('express')
const favoriteRoutes = express.Router()
const favoritesController = require('../controllers/favorites-controller')

favoriteRoutes.get('/', favoritesController.count)
favoriteRoutes.get('/user', favoritesController.userFavorites)
favoriteRoutes.post('/', favoritesController.create)
favoriteRoutes.delete('/', favoritesController.delete)

module.exports = favoriteRoutes
