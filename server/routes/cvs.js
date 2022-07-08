const router = require('express').Router();
const { CVS } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allCVS = await CVS.findAll();
    res.json(allCVS);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cv = await CVS.findOne({
      where: {
        id,
      },
    });
    res.json(cv);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;
