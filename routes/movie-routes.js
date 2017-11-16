const movieController = require('../controllers/movies-controller')

const express = require('express')
const movieRoutes = express.Router()


movieRoutes.get('/', movieController.index);
movieRoutes.get('/:id', movieController.show)

module.exports = movieRoutes
