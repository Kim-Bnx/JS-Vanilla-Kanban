const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Tag extends Model {}

Tag.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {msg: "Missing body parameter: name"},
      notEmpty: {msg: "Missing body parameter: name"}
    }
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: {
        args: [["^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"]], 
        msg: "Invalid color: color should be a valid hex color"
      }
    }
  }
}, {
  sequelize,
  tableName: "tag"
});


module.exports = Tag;