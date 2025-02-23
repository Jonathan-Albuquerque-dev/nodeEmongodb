import "dotenv/config";
import express from "express";
import "./configs/database.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRoutes);

app.listen(port, (req, res) => {
  console.log(`servidor rodando na porta : ${port}`);
});
