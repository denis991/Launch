const router = require('express').Router();
const { CVs, CVComms } = require('../db/models');

// все резюме
router.get('/', async (req, res) => {
  try {
    const allCVS = await CVs.findAll();
    res.json(allCVS);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

// конкретное резюме с комментариями
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cv = await CVs.findOne({
      where: {
        id,
      },
    });

    const comments = await CVComms.findOne({
      where: {
        id,
      },
    });
    res.json({ cv, comments });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;
