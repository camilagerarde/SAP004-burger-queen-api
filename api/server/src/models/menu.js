"use strict";
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      product: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      type: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {}
  );
  Menu.associate = function (models) {
    // associations can be defined here
  };
  return Menu;
};
