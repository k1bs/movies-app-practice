const movieController = require('../controllers/movies-controller')

const express = require('express')
const movieRoutes = express.Router()


movieRoutes.get('/', movieController.index);

module.exports = movieRoutes
