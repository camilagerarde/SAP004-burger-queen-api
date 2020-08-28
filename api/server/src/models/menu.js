"use strict";
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      product: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      type: DataTypes.STRING,
      category: DataTypes.STRING,
      hasOption: DataTypes.BOOLEAN,
      isBurger: DataTypes.BOOLEAN,
    },
    {}
  );
  Menu.associate = function (models) {
    Menu.hasMany(models.ProductsToOrder);
  };
  return Menu;
};
