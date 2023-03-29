const userData = require("../data/users.json");
const { encrypt } = require("../encrypt");

// Encrypting the json before sending it as response.
function getAllUsers(req, res) {
  encrypt(userData)
    .then((encryptedData) => {
      res.json(encryptedData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Encryption error");
    });
}

module.exports = {
  getAllUsers,
};
