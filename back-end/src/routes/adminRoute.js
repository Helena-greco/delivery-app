const express = require('express');
const adminController = require('../database/controllers/adminController');
const registerError = require('../database/middlewares/registerError');

const router = express.Router();

router
  .get('/', adminController.getUser)
  .use(registerError.existValues)
  .post('/register', adminController.createUser);

module.exports = { router };
