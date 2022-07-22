require('dotenv').config();

const bcrypt = require('bcrypt');
/**
 * пишим то что в env
 *
 */
const Bcrypt = {
  rounds: Number(process.env.SALTROUNDS) || 10,
  hash(password) {
    return bcrypt.hash(password, this.rounds);
  },
  compare(password, hash) {
    return bcrypt.compare(password, hash);
  },
};

module.exports = Bcrypt;
