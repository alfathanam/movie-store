"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movieActor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movieActor.belongsTo(models.actors);
      movieActor.belongsTo(models.movies);
    }
  }
  movieActor.init(
    {
      movieId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: `movie id must be an integer`,
          },
        },
      },
      actorId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: `actor id must be an integer`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "movieActor",
    }
  );
  return movieActor;
};
