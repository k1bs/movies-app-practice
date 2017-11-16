const Movie = require('../models/Movie')

const movieController = {}

movieController.index = (req, res, next) => {
  Movie.findAll()
  .then(movies => {
    res.json({
      message: 'ok',
      data: {movies}
    })
  }).catch(next)
}

movieController.show = (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.json({
      message: 'ok',
      data: {movie}
    })
  }).catch(next)
}

module.exports = movieController
