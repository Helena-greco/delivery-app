const { sale } = require('../models');

const getAllOrdersSellerService = async () => {
  try {
    const allSales = await sale.findAll();
    return allSales;
  } catch (error) {
    console.log(error);
  }
}

const updateOrderStatus = async (id, status) => {
  try {
    await sale.update({ status }, { where: { id } });
    return { status };
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  getAllOrdersSellerService,
  updateOrderStatus,
};
