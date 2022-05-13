const express = require('express');
const sellerController = require('../database/controllers/sellerController');
const { validateSaleID } = require('../database/middlewares/saleError');

const router = express.Router();

router
  .get('/orders', sellerController.getAllOrdersSeller)
  .patch('/orders/:id', validateSaleID, sellerController.updateStatus);

module.exports = { router };
