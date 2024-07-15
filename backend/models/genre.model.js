module.exports = (sequelize, Sequelize, DataTypes) => {

    const Genre = sequelize.define(
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