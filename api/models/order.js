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
      this.belongsTo(models.User,{
        foreignKey: 'userId',
        sourceKey:'id'

      })
      // define association here
    }
  };
  Order.init({
    dateInit: DataTypes.DATE,
    dateEnd: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};