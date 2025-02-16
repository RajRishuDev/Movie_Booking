import express from 'express';
import {
  addMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie
} from '../controllers/movie-controller.js';

const movieRouter = express.Router();

movieRouter.post('/', addMovie);
movieRouter.get('/', getMovies);
movieRouter.get('/:id', getMovieById);
movieRouter.patch('/:id', updateMovie);
movieRouter.delete('/:id', deleteMovie);

export default movieRouter;

