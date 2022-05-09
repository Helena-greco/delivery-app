const express = require('express');
const { validateToken } = require('../database/middlewares/validateToken');
const { getProducts,
  getOrders,
  createOrder,
  getOrderById } = require('../database/controllers/productController');

const router = express.Router();

router
  .get('/products', getProducts)
  .get('/orders/:id', getOrderById)
  .get('/orders', getOrders)
  .post('/orders', validateToken, createOrder);

module.exports = { router };