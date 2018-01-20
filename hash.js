const argon2 = require('argon2');

const getPasswordHash = function(password) {
  return argon2.generateSalt().then(function(salt) {
    return argon2.hash(password, salt);
  });
};

const verifyPassword = function(passwordHash, password) {
  return argon2.verify(passwordHash, password);
};
