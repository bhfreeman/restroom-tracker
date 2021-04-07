const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bathroom extends Model {}

Bathroom.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
    location_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_stalls: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ada_compliant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overall_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bathroom',
  }
);

module.exports = Bathroom;