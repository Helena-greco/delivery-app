const { getAllOrdersSellerService } = require('../services/productService');

const getAllOrdersSeller = async (req, res) => {
  try {
    const seller = await getAllOrdersSellerService(req.params);
    return res.status(200).json(seller);
  } catch (error) {
    return res.status(500).json(err);
  }
}

module.exports = { getAllOrdersSeller };
