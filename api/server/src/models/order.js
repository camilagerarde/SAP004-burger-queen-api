"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      waiter: DataTypes.STRING,
      table: DataTypes.INTEGER,
      is_active: DataTypes.BOOLEAN,
      status: DataTypes.STRING,
      total: DataTypes.DECIMAL(10, 2),
    },
    {}
  );
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};
