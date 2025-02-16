import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: false,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
    required: false,
  },
  seatNumber: {
    type: String,
    required: false,
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed'],
    default: 'Pending',
    required: false,
  },
});

export default mongoose.model("Booking", bookingSchema);

