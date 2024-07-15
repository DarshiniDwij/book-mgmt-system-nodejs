module.exports = (sequelize, Sequelize, DataTypes) => {

    const Author = sequelize.define(
        "author",{
            author_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              name: {
                type: DataTypes.STRING
              },
              biography: {
                type: DataTypes.TEXT
              }
            //   imagePath: {
            //     type: DataTypes.STRING
            //   }
       
        }
    );

    return Author;

};