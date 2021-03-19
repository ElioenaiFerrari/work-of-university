const { api } = require('../config/api');
const { Continent } = require('../models/continent');
const { Country } = require('../models/country');

class PopulateController {
  async populate(req, res) {
    try {
      const validContinents = [
        'Europe',
        'Americas',
        'Africa',
        'Oceania',
        'Asia',
      ];

      const response = await api.get('/all');

      const countries = response.data;

      await Promise.all(
        [...countries].map(async ({ name, region }) => {
          if (!validContinents.includes(region)) {
            return;
          }

          const [continent, ...rest] = await Continent.findOrCreate({
            where: { name: region },
          });

          await Country.create({
            name,
            continent_id: continent.get('id'),
          });
        })
      );

      return res.status(200).redirect('/continents');
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  }

  async findAll(req, res) {
    try {
      const continentsWithCountries = await Continent.findAll({
        include: [
          {
            model: Country,
            as: 'countries',
          },
        ],
      });

      return res.status(200).json(continentsWithCountries);
    } catch (error) {
      return res.status(500).json({ message });
    }
  }
}

module.exports = { PopulateController };
