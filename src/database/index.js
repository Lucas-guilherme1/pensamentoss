const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const User = require('../model/User');
const Thought = require('../model/Thoughts');
const connection = new Sequelize(databaseConfig);

User.init(connection),
Thought.init(connection)

module.exports = connection;