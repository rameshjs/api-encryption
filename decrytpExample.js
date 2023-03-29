const axios = require("axios");
const openpgp = require("openpgp");
const { getKeys } = require("./keyUtils");

const { privateKey } = getKeys();
const passphrase = "supersecret";
const apiEndpoint = "http://localhost:3000/api/users"; 

const decryptMessage = async () => {
  try {
    const response = await axios.get(apiEndpoint);
    const encryptedMessage = response.data;

    const privateKeyDecrypt = await openpgp.decryptKey({
      privateKey: await openpgp.readPrivateKey({
        armoredKey: privateKey,
      }),
      passphrase,
    });

    const message = await openpgp.readMessage({
      armoredMessage: encryptedMessage,
    });
    const { data: decrypted, signatures } = await openpgp.decrypt({
      message,
      decryptionKeys: privateKeyDecrypt,
    });
    console.log(decrypted);
  } catch (error) {
    console.error(error);
  }
};

decryptMessage();
