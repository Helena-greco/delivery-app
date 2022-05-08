const express = require('express');
const { getProducts,
  getOrders,
  createOrder,
  getOrderById } = require('../database/controllers/productController');

const router = express.Router();

router
  .get('/products', getProducts)
  .get('/orders/:id', getOrderById)
  .get('/orders', getOrders)
  .post('/orders', createOrder);

module.exports = { router };