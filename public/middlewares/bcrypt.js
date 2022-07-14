require('dotenv').config();

const bcrypt = require('bcrypt');

const Bcrypt = {
  rounds: Number(process.env.SALTROUNDS) || 8,
  hash(password) {
    return bcrypt.hash(password, this.rounds);
  },
  compare(password, hash) {
    return bcrypt.compare(password, hash);
  },
};

module.exports = Bcrypt;
