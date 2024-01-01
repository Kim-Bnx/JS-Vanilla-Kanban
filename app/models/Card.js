const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Card extends Model {}

Card.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {msg: "Missing body parameter: title"},
      notEmpty: {msg: "Missing body parameter: title"}
    }
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {msg: "Position should not be null"},
      isInt: {msg: "Invalid type: position should be a number"}
    }
  },
}, {
  sequelize,
  tableName: "card"
});


module.exports = Card;