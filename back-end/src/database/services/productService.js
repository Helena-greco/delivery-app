const { product, sale } = require('../models');

const getAllProducts = async () => {
  try {
    const allProducts = await product.findAll();
    return allProducts;
  } catch (error) {
    console.log(error);
  }
}

const getAllOrders = async () => {
  try {
    const allSales = await sale.findAll();
    return allSales;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllProducts, getAllOrders };