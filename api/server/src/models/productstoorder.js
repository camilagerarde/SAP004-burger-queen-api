"use strict";
module.exports = (sequelize, DataTypes) => {
  const ProductsToOrder = sequelize.define(
    "ProductsToOrder",
    {
      count: DataTypes.INTEGER,
      addEgg: DataTypes.BOOLEAN,
      addCheese: DataTypes.BOOLEAN,
    },
    {}
  );
  ProductsToOrder.associate = function (models) {
    ProductsToOrder.belongsTo(models.Menu);
    ProductsToOrder.belongsTo(models.Order);
  };
  return ProductsToOrder;
};
