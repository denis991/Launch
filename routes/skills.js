const router = require('express').Router();
const { Skills } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allSkills = await Skills.findAll();
    res.json(allSkills);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;
