const express = require('express');
const getAllProducts = require('../database/controllers/productController');

const router = express.Router();

router
  .get('/products', getAllProducts.getAll);

module.exports = { router };