import Movie from "../models/Movies.js";
export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const addMovie = async (req, res) => {
  try {
    const { title, description, genre, poster, releaseDate, featured } =
      req.body;

    const movie = new Movie({
      title,
      description,
      genre,
      poster,
      releaseDate,
      featured,
    });
    await movie.save();
    console.log("Movie details created successfully");
    res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, genre, poster, releaseDate, featured } =
      req.body;

    const movie = await Movie.findByIdAndUpdate(
      id,
      { title, description, genre, poster, releaseDate, featured },
      { new: true, runValidators: true }
    );

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
