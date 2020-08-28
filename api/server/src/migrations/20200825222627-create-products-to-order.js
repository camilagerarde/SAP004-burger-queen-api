'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProductsToOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      count: {
        type: Sequelize.INTEGER,
      },
      addEgg: {
        type: Sequelize.BOOLEAN,
      },
      addCheese: {
        type: Sequelize.BOOLEAN,
      },
      burger: {
        type: Sequelize.STRING,
      },
      menuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Menu', key: 'id' },
      },
      orderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Order', key: 'id' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ProductsToOrders');
  },
};
