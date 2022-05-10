const { product, sale, saleProduct } = require('../models');

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
  console.log("function1", body);
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

const createSaleProduct = async (body) => {
  console.log("function2", body);
  try {
    const dataProducts = body.map(async (element) => {
      await saleProduct.create({
        sale_id: element.sale_id,
        product_id: element.id,
        quantity: element.quantity,
      })
    })
    await Promise.all(dataProducts);
  } catch(error) {
    console.log(error);
  }
}

const getOrderByIdService = async (params) => {
  try {
    const [allSales] = await sale.findAll({
      where: { id: params.id },
      attributes: { exclude: ['userId', 'sellerId'] },
      include: [
        { model: product, as: 'products', attributes: { exclude: ['id', 'urlImage'] } },
      ],
    });
    return allSales;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllProducts,
  getAllOrders,
  createOrderService,
  createSaleProduct,
  getOrderByIdService,
};