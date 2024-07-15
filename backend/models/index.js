const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
    config.db.DB_NAME,
    config.db.DB_USER,
    config.db.DB_PASS,
    {
      host: config.db.DB_HOST,
      dialect: config.db.dialect,
      operatorsAliases: false,
  
      poll: {
        max: config.db.pool.max,
        min: config.db.pool.min,
        acquire: config.db.pool.acquire,
        idle: config.db.pool.idle
      }
    }
  );

  const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.books = require("./book.model.js")(sequelize,Sequelize,DataTypes);
db.author = require("./author.model.js")(sequelize,Sequelize,DataTypes);
db.genre = require("./genre.model.js")(sequelize,Sequelize,DataTypes);

db.author.hasMany(db.books,{ foreignKey: 'author_id' });
db.genre.hasMany(db.books,{ foreignKey: 'genre_id' });
db.books.belongsTo(db.author,{foreignKey: 'author_id'});
db.books.belongsTo(db.genre,{ foreignKey: 'genre_id' });

module.exports = db;