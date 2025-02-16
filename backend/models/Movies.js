import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  poster: {
    type: String,
    required: false,
  },
  featured: {
    type: Boolean,
    default: false,
    required: false,
  },
  releaseDate: {
    type: Date,
    required: false,
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: false,
    },
  ],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
    required: false,
  },
  numberOfRatings: {
    type: Number,
    default: 0,
    required: false,
  }
});

export default mongoose.model("Movie", movieSchema);

