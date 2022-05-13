const express = require('express');
const sellerController = require('../database/controllers/sellerController');

const router = express.Router();

router
  .get('/orders/:id', sellerController.getAllOrdersSeller);

module.exports = { router };
