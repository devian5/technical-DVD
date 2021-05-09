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
      this.belongsTo(models.Order, {
        foreignKey: 'orderId',
        sourceKey:'id'
      }),
      this.belongsTo(models.Movies,{
        foreignKey: 'movieId',
        sourceKey:'id'

      })
      // define association here
    }
  };
  RentalTransition.init({
    movieId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RentalTransition',
  });
  return RentalTransition;
};