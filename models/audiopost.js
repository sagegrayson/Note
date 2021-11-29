//This is a possibility, not needed for mvp but took 2 seconds to make

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class audiopost extends Model {}
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Post_content: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "genre",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "audiopost",
  }
);
module.exports = Audiopost;
