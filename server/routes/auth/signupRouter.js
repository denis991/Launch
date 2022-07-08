const router = require('express').Router();
const { Users } = require('../../db/models');
const Bcrypt = require('../../public/middlewares/bcrypt');
const { checkSession } = require('../../public/middlewares/checkSession');

router.route('/').post(checkSession, async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const result = await Users.create({
      email,
      password: await Bcrypt.hash(password),
      name,
    });
    if (result.id) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});
module.exports = router;
