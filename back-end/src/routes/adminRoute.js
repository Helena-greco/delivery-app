const express = require('express');
const adminController = require('../database/controllers/adminController');

const router = express.Router();

router
  .get('/', adminController.getUser)

module.exports = { router };