const { searchSellers } = require('../services/userService');

const searchSeller = async (_req, res) => {
  try {
    const seller = await searchSellers();
    return res.status(200).json(seller);
  } catch (error) {
    return res.status(500).json(err);
  }
}

module.exports = { searchSeller };
