const express = require('express');
const userController = require('../database/controllers/userController');

const router = express.Router();

router
  .get('/', userController.searchSeller);

module.exports = { router };
