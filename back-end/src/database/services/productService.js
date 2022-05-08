const { product, sales } = require('../models');

const getAllProducts = async () => {
  try {
    const allProducts = await product.findAll();
    return allProducts;
  } catch (error) {
    console.log(error);
  }
}

const getAllSales = async () => {
  try {
    const allSales = await sales.findAll();
    return allSales;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllProducts, getAllSales };