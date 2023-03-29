
#### fetch data from a server using encrypted PGP keys.

### Setup
Before starting the server, make sure to run `generateKey.js` in the terminal to create the public and private PGP keys. This step is crucial as encryption and decryption is dependent on pgp keys.

```
node generateKey.js
```

### To start the server, run the following command:

```
npm start 
```
### Usage
Once the server is running, navigate to `http://localhost:3000/api/users` in your web browser to fetch all user data. The data should appear as encrypted key values.

To decrypt the data and view it in a human-readable format, you can use the `decryptExample.js` file. Open a new terminal window and make sure the server is still running. Then, run the following command:

```
node decryptExample.js
```
This will decrypt the user data and display it in the terminal window.
