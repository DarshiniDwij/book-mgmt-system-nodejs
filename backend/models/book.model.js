module.exports = (sequelize, Sequelize, DataTypes) => {
    const Book = sequelize.define(
      "book", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING
        },
        author_id: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        },
        published: {
          type: DataTypes.BOOLEAN
        },
        publication_date: {
            type: DataTypes.DATE
        },
        language: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL(8,2)
        },
        description: {
            type: DataTypes.TEXT
        },
        // imagePath: {
        //     type: DataTypes.STRING
        //   },
        created_at: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updated_at: {
          allowNull: false,
          type: DataTypes.DATE
        }
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    return Book;
  };