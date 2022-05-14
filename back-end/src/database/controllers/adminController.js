const { getUsersService } = require("../services/adminService");

const getUser = async (_req, res) => {
  try {
    const data = await getUsersService();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { getUser };