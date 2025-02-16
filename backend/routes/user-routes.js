import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  logoutUser,
  getUserById,
  deleteUser,
  updateUser,

} from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUser);
userRouter.patch("/:id", updateUser);

userRouter.get("/logout", logoutUser);

export default userRouter;

