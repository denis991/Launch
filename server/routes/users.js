const router = require('express').Router();
const sequelize = require('sequelize');
const { CVComms, Users } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allUsers = await Users.findAll({
      include: {
        model: CVComms,
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('body')), 'countComments']
        ],
      },
      group: ['Users.id', 'CVComms.id']
    });

    res.json(allUsers);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({
      where: {
        id,
      },
      include: {
        model: CVComms,
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('body')), 'countComments']
        ],
      },
      group: ['Users.id', 'CVComms.id']
    });

    res.json({ user });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;
