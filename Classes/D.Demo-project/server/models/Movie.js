const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  title: { type: String, required: true },
  storyline: { type: String, required: true },
  trailerUrl: { type: String, required: true },
  posterUrl: { type: String, required: true },
});

module.exports = model('Movie', movieSchema);
