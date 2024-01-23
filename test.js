const webSecurity = require('./index');

const secretKey = 'mysecretkey';
const originalData = 'Hello, Web Security!';

const encryptedData = webSecurity.encrypt(originalData, secretKey);
console.log('Encrypted:', encryptedData);

const decryptedData = webSecurity.decrypt(encryptedData, secretKey);
console.log('Decrypted:', decryptedData);
