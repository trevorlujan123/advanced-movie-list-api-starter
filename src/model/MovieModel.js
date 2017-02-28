import mongoose from 'mongoose';

/* eslint-disable camelcase */

const movieSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  poster_path: {
    required: true,
    type: String
  },
  overview: {
    required: true,
    type: String
  },
  release_date: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model('Movie', movieSchema);
