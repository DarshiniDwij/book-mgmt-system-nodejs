module.exports = (sequelize, Sequelize, DataTypes) => {

    const Author = sequelize.define(
        "genre",{
            genre_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              genre_name: {
                type: DataTypes.STRING
              }
        }
    );

    return Genre;

};