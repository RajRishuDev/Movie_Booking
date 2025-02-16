import mongoose from "mongoose";
import moviesList from "./movieList.js";
import Movie from "../models/Movies.js";

const seedMovies = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/movie_booking", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");

    // Clear existing movies
    await Movie.deleteMany({});
    console.log("Existing movies deleted");

    // Insert movies from the moviesList
    const insertedMovies = await Movie.insertMany(moviesList);
    console.log("All movies seeded successfully!");
    console.log("Inserted movies:", insertedMovies);
  } catch (error) {
    console.error("Error seeding movies:", error.message);
  } finally {
    // Close the connection
    try {
      await mongoose.connection.close();
      console.log("Database connection closed");
    } catch (err) {
      console.error("Error closing connection:", err.message);
    }
  }
};

// Run the seeding process
seedMovies();

