import "dotenv/config";
import mongoose from "mongoose";

const url = process.env.DATABASE_URL_CONECT;

const database = mongoose
  .connect(url)
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((err) => {
    console.log(err);
  });

export default database;
