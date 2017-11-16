const db = require('../db/config')

const Movie = {}

Movie.findAll = () => {
  return db.query(`SELCET * FROM movies`)
}

module.exports = Movie
