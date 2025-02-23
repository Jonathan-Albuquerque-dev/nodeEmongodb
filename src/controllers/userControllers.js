import mongoose from "mongoose";
import User from "../models/userModels.js";

export const getAllUsers = async (req, res) => {
  const usuario = await User.find();
  res.status(200).json(usuario);
};

export const getOneUser = async (req, res) => {
  const idUser = req.params.id;

  const usuario = await User.findById(idUser);
  res.status(200).json(usuario);
};

export const createUser = async (req, res) => {
  const usuario = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await usuario.save();

  res.status(201).json(usuario);
};

export const deleteUser = async (req, res) => {
  const idUser = req.params.id;

  const usuario = await User.deleteOne({ id: idUser });

  res.status(200).json({ message: "Usuario deletado com sucesso!" });
};

export const updateUser = async (req, res) => {
  const usuario = await User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.status(200).json(usuario);
};
