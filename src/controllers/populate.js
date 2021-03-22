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

      await Promise.allSettled(
        [...countries].map(async ({ name, region }) => {
          if (!validContinents.includes(region)) {
            return;
          }

          const [continent, ...rest] = await Continent.findOrCreate({
            where: { name: region },
          });

          await Country.create({
            continent_id: continent.get('id'),
            name,
            country_details_url: `https://restcountries.eu/rest/v2/name/${name.replace(
              / /g,
              '%20'
            )}`,
          });
        })
      );

      return res.status(200).redirect('/continents');
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  }
}

module.exports = { PopulateController };
