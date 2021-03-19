const { Router } = require('express');
const { PopulateController } = require('./controllers/populate');
const router = Router();

const populateController = new PopulateController();

const populateRouter = () => {
  router.get('/populate', populateController.populate);
  router.get('/continents', populateController.continents);

  return router;
};

module.exports = { populateRouter };
