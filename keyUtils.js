const fs = require("fs");

const getKeys = () => {
  const privateKey = fs.readFileSync("private.key", "utf-8");
  const publicKey = fs.readFileSync("public.key", "utf-8");
  return { privateKey, publicKey };
};

module.exports = { getKeys };
