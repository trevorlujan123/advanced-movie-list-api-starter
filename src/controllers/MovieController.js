import MovieModel from '../model/MovieModel';

const movieController = {};

/* eslint-disable camelcase */

movieController.listMovie = (request, response, next) => {
  MovieModel.find({}).exec()
    .then(movies => {
      return response.json(movies);
    })
    .catch(err => {
      return next(`Error ${err}`);
    });
};

movieController.showMovieId = (request, response, next) => {
  MovieModel.findById(request.params._id).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(`Error ${err}`);
    });
};

movieController.removeMovie = (request, response, next) => {
  MovieModel.findByIdAndRemove(request.params._id).exec()
      .then(movie => {
        return response.json(movie);
      })
      .catch(err => {
        return next(`Error ${err}`);
      });
};

movieController.createMovie = (request, response, next) => {
  const contact = new MovieModel({
    title: request.body.title,
    poster_path: request.body.poster_path,
    overview: request.body.overview,
    release_date: request.body.release_date
  });

  contact.save()
    .then(movieToSave => {
      return response.json(movieToSave);
    })
    .catch(err => {
      return next(`Error ${err}`);
    });
};

movieController.updateMovie = (request, response, next) => {
  MovieModel.findById(request.params._id).exec()
    .then(movie => {
      movie.title = request.body.title || movie.title;
      movie.poster_path = request.body.poster_path || movie.poster_path;
      movie.overview = request.body.overview || movie.overview;
      movie.release_date = request.body.release_date || movie.release_date;

      return movie.save();
    })
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(`Error ${err}`);
    });
};

export default movieController;
