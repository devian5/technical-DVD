'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RentalTransition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      this.belongsTo(models.Movie,{
        foreignKey: 'movieId',
        sourceKey:'id'

      });

      this.belongsTo(models.Order, {
        foreignKey: 'orderId',
        sourceKey:'id'
      });

    }
  };
  RentalTransition.init({
    movieId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    orderState: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'RentalTransition',
  });
  return RentalTransition;
};