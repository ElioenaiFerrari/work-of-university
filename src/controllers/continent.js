const { Continent } = require('../models/continent');
const { Country } = require('../models/country');
const { RestController } = require('./rest');

class ContinentController extends RestController {
  constructor() {
    super(Continent);
  }

  async findAll(req, res, next) {
    const models = await this.model.findAll({
      include: [
        {
          model: Country,
          as: 'countries',
        },
      ],
    });

    return res.status(200).json(models);
  }

  async findOne(req, res, next) {
    const models = await this.model.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Country,
          as: 'countries',
        },
      ],
    });

    return res.status(200).json(models);
  }
}

module.exports = { ContinentController };
