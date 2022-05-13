const { sale } = require('../models');

const getAllOrdersSellerService = async (body) => {
  try {
    const allSales = await sale.findAll({
      where: { seller_id: body.id },
    });;
    return allSales;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllOrdersSellerService,
};
