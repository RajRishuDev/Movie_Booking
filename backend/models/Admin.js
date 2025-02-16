import mongoose from "mongoose";

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  addedMovies: [
    {
      type: String,
    },
  ],
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
