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

router.route('/vacancies/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const vacancy = await Vacancies.findOne({
        where: {
          id,
        },
      });
      res.json(vacancy);
    } catch (err) {
      console.log(err);
      res.sendStatus(404);
    }
  })
  .put(async (req, res) => {
    const {
      title,
      level,
      salary,
      company,
      schedule,
      url,
      contact_name,
      contact_phone,
      contact_social,
      experience,
      about_company,
      about_project,
      duties,
      requirements,
      technology,
      conditions,
      city,
    } = req.body;
    try {
      const vacancy = await Vacancies.findOne({
        where: {
          user_id: req.session.userId
        }
      });
      vacancy.title = title;
      vacancy.level = level;
      vacancy.salary = salary;
      vacancy.company = company;
      vacancy.schedule = schedule;
      vacancy.url = url;
      vacancy.contact_name = contact_name;
      vacancy.contact_phone = contact_phone;
      vacancy.contact_social = contact_social;
      vacancy.experience = experience;
      vacancy.about_company = about_company;
      vacancy.about_project = about_project;
      vacancy.duties = duties;
      vacancy.requirements = requirements;
      vacancy.technology = technology;
      vacancy.conditions = conditions;
      vacancy.city = city;
      vacancy.save();
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

module.exports = router;
