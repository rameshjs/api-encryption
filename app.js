const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const { generateKeys, getKeys } = require("./keyUtils");

const app = express();

app.use(bodyParser.json());
app.use("/api", routes);

generateKeys().then(() => {
  app.listen(3000, () => {
    const { privateKey, publicKey } = getKeys();
    console.log(`Generated keys ${privateKey} ${publicKey}`);
    console.log("Server started on port 3000");
  });
});
