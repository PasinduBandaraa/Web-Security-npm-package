const crypto = require('crypto');

function encrypt(data, secretKey) {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(data, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedData, secretKey) {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
}

module.exports = { encrypt, decrypt };
