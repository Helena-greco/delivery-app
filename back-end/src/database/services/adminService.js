const { user } = require('../models');

const getUsersService = async () => {
  try{
    const users = await user.findAll();
    return users;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsersService };