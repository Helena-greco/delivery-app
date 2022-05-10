const express = require('express');
const { validateToken } = require('../database/middlewares/validateToken');
const { getProducts,
  getOrders,
  createOrder,
  createSaleProducts,
  getOrderById } = require('../database/controllers/productController');

const router = express.Router();

router
  .get('/products', getProducts)
  .get('/orders/:id', getOrderById)
  .get('/orders', getOrders)
  .post('/orders', validateToken, createOrder)
  .post('/saleProduct', validateToken, createSaleProducts);

module.exports = { router };