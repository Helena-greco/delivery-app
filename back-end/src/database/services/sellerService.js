const { sale } = require('../models');

const getAllOrdersSellerService = async () => {
  try {
    const allSales = await sale.findAll();
    return allSales;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllOrdersSellerService,
};
