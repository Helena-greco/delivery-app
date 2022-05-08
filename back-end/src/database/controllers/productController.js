const { getAllProducts, getAllSales } = require("../services/productService");

const getProducts = async (_req, res) => {
  try {
    const data = await getAllProducts();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const getSales = async (_req, res) => {
  try {
    const data = await getAllSales();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { getProducts, getSales };