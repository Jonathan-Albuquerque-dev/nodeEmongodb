import express from "express";
import {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/user", getAllUsers);
userRouter.get("/user/:id", getOneUser);
userRouter.post("/user", createUser);
userRouter.delete("/user/:id", deleteUser);
userRouter.patch("/user/:id", updateUser);
export default userRouter;
