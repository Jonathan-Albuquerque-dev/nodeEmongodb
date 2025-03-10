import express from "express";
import {
  getAllProduct,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";

const productRoute = express.Router();

productRoute.get("/produtos", getAllProduct);
productRoute.get("/produtos/:id", getOneProduct);
productRoute.post("/produtos", createProduct);
productRoute.patch("/produtos/:id", updateProduct);
productRoute.delete("/produtos/:id", deleteProduct);

export default productRoute;
