"use strict";
module.exports = (sequelize, DataTypes) => {
  const ProductsToOrder = sequelize.define(
    "ProductsToOrder",
    {
      product: DataTypes.STRING,
      count: DataTypes.INTEGER,
      price: DataTypes.DECIMAL(10, 2),
    },
    {}
  );
  ProductsToOrder.associate = function (models) {
    // associations can be defined here
  };
  return ProductsToOrder;
};
