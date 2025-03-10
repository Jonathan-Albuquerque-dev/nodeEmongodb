import "dotenv/config";
import express from "express";
import "./configs/database.js";
import userRouter from "./routes/userRoutes.js";
import ProductRouter from "./routes/ProductRoutes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(ProductRouter);

app.listen(port, (req, res) => {
  console.log(`servidor rodando na porta : ${port}`);
});
