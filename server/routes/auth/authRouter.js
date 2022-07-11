const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Users } = require('../../db/models');

router.route('/').post(async (req, res) => {
  try {
    const user = await Users.findOne({ where: { email: req.body.email } });
    const truePass = bcrypt.compareSync(req.body.password, user.password);
    if (truePass) {
      res.json(user);
    } else {
      throw new Error('wrong password');
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
