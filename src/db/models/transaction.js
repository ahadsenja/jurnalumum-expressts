'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.jurnal);
    }
  };
  transaction.init({
    jurnal_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    description: DataTypes.TEXT,
    debit: DataTypes.DECIMAL,
    credit: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'transaction',
    underscored: true,
  });
  return transaction;
};