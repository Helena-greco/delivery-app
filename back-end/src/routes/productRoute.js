const express = require('express');
const { getProducts, getOrders, createOrder } = require('../database/controllers/productController');

const router = express.Router();

router
  .get('/products', getProducts)
  .get('/orders', getOrders)
  .post('/orders', createOrder);

module.exports = { router };