import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingRouter from "./routes/booking-router.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/movie", movieRouter);
app.use("/api/booking", bookingRouter);

// Log the connection string
console.log("Connecting to:", process.env.dbLocal);

// Database connection
mongoose
  .connect(process.env.dbLocal, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err.message);
    process.exit(1);
  });

// Routes

// Start server
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
