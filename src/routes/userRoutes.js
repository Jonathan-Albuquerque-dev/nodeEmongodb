import express from "express";
import {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
} from "../controllers/userControllers.js";

const Router = express.Router();

Router.get("/user", getAllUsers);
Router.get("/user/:id", getOneUser);
Router.post("/user", createUser);
Router.delete("/user/:id", deleteUser);
Router.patch("/user/:id", updateUser);
export default Router;
