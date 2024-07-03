module.exports = {

  NODE_ENV: process.env.NODE_ENV,
  PORT: 3000,

  db: {
    DB_HOST: "127.0.0.1",
    DB_USER: "root",
    DB_PASS: "MyIntern@ps1",
    DB_NAME: "book-mgmt-system",
    dialect: "mysql",

    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }

};