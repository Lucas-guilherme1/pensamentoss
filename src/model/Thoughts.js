const { Model, DataTypes } = require('sequelize');

class Thoughts extends Model {
  static init(connection) {
    super.init(
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING
        },
        {
            sequelize: connection
        }
    );
  };
};

module.exports = Thoughts;