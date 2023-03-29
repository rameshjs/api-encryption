const userData = require("../data/users.json");

function getAllUsers(req, res) {
  res.json(userData);
}

function getUserById(req, res) {
  const { id } = req.params;
  const user = userData.find((user) => user.id === parseInt(id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
}

module.exports = {
  getAllUsers,
  getUserById,
};
