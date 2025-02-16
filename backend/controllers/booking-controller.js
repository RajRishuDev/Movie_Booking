import Booking from "../models/booking.js";
import Movie from "../models/Movies.js";
import User from "../models/User.js";

export const createBooking = async (req, res) => {
  const { movieId, userId } = req.body;

  try {
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newBooking = await Booking.create({
      movie: movie._id,
      user: user._id,
    });

    movie.bookings.push(newBooking._id);
    await movie.save();

    user.bookings.push(newBooking._id);
    await user.save();

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

