"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class actors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      actors.belongsToMany(models.movies, {
        through: models.movieActor,
        foreignKey: models.movieId,
      });
    }
  }
  actors.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: `Name cant be empty`,
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: `Age cant be empty`,
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: `Address cant be empty`,
          },
        },
      },
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "actors",
    }
  );
  return actors;
};
