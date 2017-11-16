CREATE TABLE IF NOT EXISTS favorites (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  movie_id INT REFERENCES movies(id),
);
