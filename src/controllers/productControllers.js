import productModels from "../models/productModels.js";

export const getAllProduct = async (req, res) => {
  try {
    const produtos = await productModels.find();
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const produto = await productModels.findById(req.params.id);
    res.status(200).json(produto);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createProduct = async (req, res) => {
  try {
    const produto = new productModels({
      name: req.body.name,
      price: req.body.price,
    });
    await produto.save();

    res.status(201).json(produto);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const produto = await productModels.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
    });

    res.status(200).json(produto);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const idProduct = req.params.id;
    const produto = await productModels.deleteOne({ _id: idProduct });
    res.status(200).json({ message: "Produto Deletado com Sucesso" });
  } catch (err) {
    res.status(200).json(err);
  }
};
