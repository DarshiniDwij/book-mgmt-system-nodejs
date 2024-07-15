// migrations/20240713151000-add-books-present-sold.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the new columns
    await queryInterface.addColumn("books", "booksPresent", {
      type: Sequelize.INTEGER,
      allowNull: true, // or false, depending on your requirements
    });

    await queryInterface.addColumn("books", "booksSold", {
      type: Sequelize.INTEGER,
      allowNull: true, // or false, depending on your requirements
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the added columns
    await queryInterface.removeColumn("books", "booksPresent");
    await queryInterface.removeColumn("books", "booksSold");
  },
};
