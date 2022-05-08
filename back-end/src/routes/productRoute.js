const express = require('express');
const { getProducts, getOrders } = require('../database/controllers/productController');

const router = express.Router();

router
  .get('/products', getProducts)
  .get('/orders', getOrders);

module.exports = { router };