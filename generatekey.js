const openpgp = require("openpgp");
const fs = require("fs");

const generateKeys = async () => {
  const { publicKey, privateKey } = await openpgp.generateKey({
    userIDs: [{ name: "John Doe", email: "johndoe@example.com" }],
    passphrase: "supersecret",
  });

  fs.writeFileSync("private.key", privateKey);
  fs.writeFileSync("public.key", publicKey);
};

generateKeys();
