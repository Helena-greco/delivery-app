const { getAllOrdersSellerService, updateOrderStatus } = require('../services/sellerService');

const getAllOrdersSeller = async (_req, res) => {
  try {
    const seller = await getAllOrdersSellerService();
    return res.status(200).json(seller);
  } catch (error) {
    return res.status(500).json(err);
  }
}

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const sale = await updateOrderStatus(Number(id), status);
    return res.status(200).json(sale);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { getAllOrdersSeller, updateStatus };
