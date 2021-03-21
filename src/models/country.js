const { Model, DataTypes } = require('sequelize');

class Country extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        country_details_url: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Continent, {
      as: 'continent',
      foreignKey: 'continent_id',
    });
  }
}

module.exports = { Country };
