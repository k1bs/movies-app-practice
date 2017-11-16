const movieController = require('../controllers/movies-controller')

const express = require('express')
const movieRoutes = express.Router()


movieRoutes.get('/', movieController.index);
movieRoutes.get('/:id', movieController.show)
movieRoutes.post('/', movieController.create)

movieRoutes.put('/:id', movieController.update)

module.exports = movieRoutes
