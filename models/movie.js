'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.belongsToMany(models.Order, { through: models.OrderMovie }); //relacion many to many, pertenece a models.Order a traves de models.OrderMovie
      
    }
  };
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    poster_path: {
      type: DataTypes.STRING,
      allowNull:false
    },
    overview: DataTypes.TEXT,
    release_data: DataTypes.DATE,
    vote_average: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};