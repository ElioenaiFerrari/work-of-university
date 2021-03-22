const { Router } = require('express');
const { PopulateController } = require('./controllers/populate');
const { ContinentController } = require('./controllers/continent');
const { CountryController } = require('./controllers/country');
const router = Router();

const populateController = new PopulateController();
const continentController = new ContinentController();
const countryController = new CountryController();

const populateRouter = () => {
  router.get('/populate', populateController.populate);
  //*Continents
  router.get('/continents', (req, res) =>
    continentController.findAll(req, res)
  );
  router.get('/continents/:id', (req, res) =>
    continentController.findOne(req, res)
  );
  router.put('/continents/:id', (req, res) =>
    continentController.update(req, res)
  );
  router.delete('/continents/:id', (req, res) =>
    continentController.delete(req, res)
  );

  //*Countries
  router.get('/countries', (req, res) => countryController.findAll(req, res));
  router.get('/countries/:id', (req, res) =>
    countryController.findOne(req, res)
  );
  router.put('/countries/:id', (req, res) =>
    countryController.update(req, res)
  );
  router.delete('/countries/:id', (req, res) =>
    countryController.delete(req, res)
  );

  return router;
};

module.exports = { populateRouter };
