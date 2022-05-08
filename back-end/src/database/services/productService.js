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

const createOrderService = async (body) => {
  try {
    const create = await sale.create({
      userId: body.user_id,
      sellerId: body.seller_id,
      totalPrice: body.total_price,
      deliveryAddress: body.delivery_address,
      deliveryNumber: body.delivery_number,
      saleDate: new Date(),
      status: body.status,
    });
    return create.id;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllProducts, getAllOrders, createOrderService };