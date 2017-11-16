const db = require('../db/config')

const Movie = {}

Movie.findAll = () => {
  return db.query(`SELCET * FROM movies`)
}

Movie.findById = (id) => {
  return db.oneOrNone(
   `SELECT * FROM movies
   WHERE id = $1`, [id])
}


module.exports = Movie
