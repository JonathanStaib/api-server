'use strict';

require('dotenv').config();
const { Sequelize, DataTypes} = require('sequelize');
const customer = require('./customer');
const city = require('./city');
const Collection = require('./collection');

// if sqlite::memory does not work, use sqlite:memory
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

// db singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const customerModel = customer(sequelizeDatabase, DataTypes);

const cityModel = city(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  customerCollection: new Collection(customerModel),
  cityCollection: new Collection(cityModel),
};
