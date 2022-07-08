const router = require('express').Router();
const { Vacancies } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allVacancies = await Vacancies.findAll();
    res.json(allVacancies);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;
