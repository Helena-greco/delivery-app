const { getAllProducts } = require("../services/productService");

const getAll = async (_req, res) => {
  try {
    const data = await getAllProducts();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { getAll };