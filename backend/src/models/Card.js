const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Card = sequelize.define("Card", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deck_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  review_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Card;
