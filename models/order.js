'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsTo(models.User); //pertenece a models.User
            this.belongsToMany(models.Movie, { through: models.OrderMovie }); //relacion many to many, a traves de models.OrderMovies
    }
  };
  Order.init({
    status: DataTypes.ENUM('alquilada', 'enviada', 'entregada'),
        returnDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};