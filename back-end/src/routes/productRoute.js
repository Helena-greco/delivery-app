const express = require('express');
const { getProducts, getSales } = require('../database/controllers/productController');

const router = express.Router();

router
  .get('/products', getProducts)
  .get('/products', getSales);

module.exports = { router };