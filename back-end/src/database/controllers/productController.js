const { getAllProducts, getAllOrders, createOrderService } = require("../services/productService");

const getProducts = async (_req, res) => {
  try {
    const data = await getAllProducts();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const getOrders = async (_req, res) => {
  try {
    const data = await getAllOrders();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const createOrder = async (req, res) => {
  try {
    const data = await createOrderService(req.body);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { getProducts, getOrders, createOrder };