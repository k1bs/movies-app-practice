const Favorite = require('../models/Favorite')

const FavoritesController = {}

FavoritesController.count = (req, res, next) => {
  Favorite.count()
  .then(favorites => {
    res.json({
      message: 'ok',
      data: {
        favorites: favorites
      }
    })
  }).catch(next)
}

FavoritesController.userFavorites = (req, res, next) => {
  Favorite.favByUser(req.user.id)
    .then(favorites => {
      res.json({
        message: 'ok',
        data: {
          favorites: favorites
        }
      })
    }).catch(next)
}

FavoritesController.create = (req, res, next) => {
  Favorite.create(req.body.movie.id, req.user.id)
    .then(favorite => {
      res.json({
        message: 'Favorite created successfully',
        data: {
          favorite: favorite
        }
      })
    }).catch(next)
}

FavoritesController.delete = (req, res, next) => {
  Favorite.destroy(req.body.favorite.id)
    .then(res => {
      res.json({
        message: 'Favorite deleted successfully'
      })
    }).catch(next)
}

module.exports = FavoritesController
