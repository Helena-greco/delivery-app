const { getUsersService, createUserService } = require("../services/adminService");

const getUser = async (_req, res) => {
  try {
    const data = await getUsersService();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const createUser = async (req, res) => {
  try {
    const registerUser = req.body;
    const data = await createUserService(registerUser);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json(err);
  }
}

module.exports = { getUser, createUser };
