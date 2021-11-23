const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Genre extends Model {}
Genre.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  genre_name: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "user",
      key: "id",
    },
    allowNull: true,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "genre",
});
module.exports = Genre;
//genre
//genre id
//genre name
//user id
