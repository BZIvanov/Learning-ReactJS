const { Schema, model } = require('mongoose');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

const bookSchema = new Schema({
  title: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE,
    unique: [true, 'Book already exists.'],
  },
  genres: [{ type: String }],
  author: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  description: { type: String },
  price: {
    type: Number,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  image: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE,
  },
  likes: [{ type: String }],
  reviews: [],
});

module.exports = model('Book', bookSchema);
