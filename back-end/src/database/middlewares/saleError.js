const { sale } = require('../models');

const validateSaleID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findSale = await sale.findOne({ where: { id } });
    if (!findSale) {
      return res.status(404).json({ message: "Sale not found!" });
    }
    return next();
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { validateSaleID }