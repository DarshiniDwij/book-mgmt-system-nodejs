const Sequelize = require("sequelize");
const config = require("../config/config.js");
const { up } = require("./20240713151000-add-books-present-sold"); // Adjust the path as per your actual migration file location

// Import the migration file
const migration = require("./20240713151000-add-books-present-sold");

const sequelize = new Sequelize({
  database: config.db.DB_NAME,
  username: config.db.DB_USER,
  password: config.db.DB_PASS,
  host: config.db.DB_HOST,
  dialect: config.db.dialect, // Adjust this based on your database type
});

// Execute the migration
(async () => {
  try {
    // Apply the migration
    await up(sequelize.getQueryInterface(), Sequelize);

    console.log("Migration applied successfully!");
  } catch (error) {
    console.error("Error applying migration:", error);
  } finally {
    // Close the Sequelize connection after migration
    await sequelize.close();
  }
})();
