require('dotenv').config();

const { user } = require('../models');

const searchSellers = async () => {
  try{
    const seller = await user.findAll({
      where: { role: 'seller' },
    });
    return seller;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { searchSellers };
