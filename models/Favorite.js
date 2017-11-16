const db = require('../db/config')

const Favorite = {}

Favorite.count = () => {
  return db.manyOrNone(`
    SELECT movies.id, COUNT(favorites.movie_id)
    FROM movies
    JOIN favorites
    ON movies.id = favorites.movie_id
  `)
}

Favorite.create = (userId, movieId) => {
  return db.one(`
    INSERT INTO favorites (user_id, movie_id)
    VALUES ($1, $2)
    RETURNING *
  `, [userId, movieId])
}

Favorite.destroy = (favoriteId) => {
  return db.none(`
    DELETE FROM favorites
    WHERE id = $1
  `, [favoriteId])
}

Favorite.favByUser = (userId) => {
  return db.manyOrNone(`
    SELECT * FROM favorites
    JOIN movies ON favorites.movie_id = movies.id
    WHERE user_id = $1
  `, [userId])
}

module.exports = Favorite
