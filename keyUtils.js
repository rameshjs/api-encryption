const openpgp = require("openpgp");
const fs = require("fs");

const generateKeys = async () => {
  const { publicKey, privateKey } = await openpgp.generateKey({
    userIDs: [{ name: "John Doe", email: "johndoe@example.com" }],
    curve: "ed25519",
    passphrase: "supersecret",
  });

  fs.writeFileSync("private.key", privateKey);
  fs.writeFileSync("public.key", publicKey);
};

const getKeys = () => {
  const privateKey = fs.readFileSync("private.key", "utf-8");
  const publicKey = fs.readFileSync("public.key", "utf-8");
  return { privateKey, publicKey };
};

module.exports = { generateKeys, getKeys };
