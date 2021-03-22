const { Country } = require('../models/country');
const { RestController } = require('./rest');

class CountryController extends RestController {
  constructor() {
    super(Country);
  }
}

module.exports = { CountryController };
