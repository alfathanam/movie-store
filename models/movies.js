"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movies.belongsToMany(models.actors, {
        through: models.movieActor,
        foreignKey: models.actorId,
      });
    }
  }
  movies.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: `name cannot be empty`,
          },
        },
      },
      release: {
        type: DataTypes.DATEONLY,
        validate: {
          notEmpty: {
            message: `date type: example 2022-11-25`,
          },
        },
      },
      genre: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: `genre cannot be empty`,
          },
        },
      },
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "movies",
    }
  );
  return movies;
};
