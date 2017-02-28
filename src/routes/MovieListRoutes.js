import {Router} from 'express';
import movieController from '../controllers/MovieController';

const router = Router();

router.get('/movies', (request, response, next) => {
  movieController.listMovie(request, response, next);
});

router.get('/movies/:_id', (request, response, next) => {
  movieController.showMovieId(request, response, next);
});

router.delete('/movies/:_id', (request, response, next) => {
  movieController.removeMovie(request, response, next);
});

router.post('/movies', (request, response, next) => {
  movieController.createMovie(request, response, next);
});

router.put('/movies/:_id', (request, response, next) => {
  movieController.updateMovie(request, response, next);
});

export default router;
