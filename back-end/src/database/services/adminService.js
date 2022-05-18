const { user } = require('../models');
const md5 = require('md5');

const getUsersService = async () => {
  try{
    const users = await user.findAll();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const createUserService = async (registrationData) => {
  try{
    const { name, email, password, role } = registrationData;
    const hash = md5(password);
    const create = await user.create({ name, email, password: hash, role },);
    console.log(create);
    return {
      id: create.id,
      name: create.name,
      email: create.email,
      role: create.role,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsersService, createUserService };