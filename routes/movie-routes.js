const movieController = require('../controllers/movies-controller')

const express = require('express')
const movieRoutes = express.Router()

movieRoutes.get('/', movieController.index)
movieRoutes.post('/', movieController.create)

movieRoutes.get('/:id', movieController.show)
movieRoutes.put('/:id', movieController.update)
movieRoutes.delete('/:id', movieController.delete)

module.exports = movieRoutes
