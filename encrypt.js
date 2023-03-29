const openpgp = require("openpgp");
const { getKeys } = require("./keyUtils");

const { publicKey } = getKeys();

const encrypt = async (userData) => {
  const encrypted = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: JSON.stringify(userData) }),
    encryptionKeys: await openpgp.readKey({ armoredKey: publicKey }),
  });
  return encrypted;
};

module.exports = {
  encrypt,
};
