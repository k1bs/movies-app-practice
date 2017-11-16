const db = require('../db/config')

const Movie = {}

Movie.findAll = () => {
  return db.query(`SELECT * FROM movies`)
}

module.exports = Movie
