"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      waiter: DataTypes.STRING,
      table: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
      status: DataTypes.STRING,
      total: DataTypes.DECIMAL(10, 2),
    },
    {}
  );
  Order.associate = function (models) {
    Order.hasMany(models.ProductsToOrder);
  };
  return Order;
};
