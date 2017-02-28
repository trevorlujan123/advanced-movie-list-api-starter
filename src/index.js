/* eslint-disable max-len */
/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import movieListRoutes from './routes/MovieListRoutes';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movie-list');

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  next();
});

app.use(movieListRoutes);

// eslint-disable-next-line
app.use((error, request, response, next) => {
  return response.status(500).send('Uh oh, something went wrong! ' + error);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
