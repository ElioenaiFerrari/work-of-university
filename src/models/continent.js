const { Model, DataTypes } = require('sequelize');

class Continent extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.ENUM('Europe', 'Asia', 'Africa', 'Americas', 'Oceania'),
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.Country, {
      as: 'countries',
      foreignKey: 'continent_id',
    });
  }
}

module.exports = { Continent };
