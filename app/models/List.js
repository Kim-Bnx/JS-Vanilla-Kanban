const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class List extends Model {}

List.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {msg: "Missing body parameter: name"},
      notEmpty: {msg: "Missing body parameter: name"}
    }
    
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {msg: "Position should not be null"},
      isInt: {msg: "Invalid type: position should be a number"}
    }
  }
}, {
  sequelize,
  tableName: "list"
});


module.exports = List;