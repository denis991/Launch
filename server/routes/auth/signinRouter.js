const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Users } = require('../../db/models');
const checkSession = require('../../public/middlewares/checkSession');

router.route('/').post(checkSession, async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('BODY:', req.body);
    const result = await Users.findOne({ where: { email } });
    console.log(result);
    if (bcrypt.compareSync(password, result.password)) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error();
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'user not found or wrong password' });
  }
});

module.exports = router;
