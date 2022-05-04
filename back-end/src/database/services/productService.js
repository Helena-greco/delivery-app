const { product } = require('../models');

const getAllProducts = async () => {
  try {
    const allProducts = await product.findAll();
    return allProducts;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllProducts };