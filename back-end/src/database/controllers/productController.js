const {
  getAllProducts,
  getAllOrders,
  createOrderService,
  getOrderByIdService,
 } = require("../services/productService");

const getProducts = async (_req, res) => {
  try {
    const data = await getAllProducts();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const getOrders = async (req, res) => {
  try {
    const data = await getAllOrders(req.params);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const createOrder = async (req, res) => {
  try {
    const data = await createOrderService(req.body);
    const { authorization } = req.headers;
    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const getOrderById = async (req, res) => {
  try {
    const data = await getOrderByIdService(req.params);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { getProducts, getOrders, createOrder, getOrderById };