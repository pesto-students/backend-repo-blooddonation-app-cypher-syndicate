const dbConfig = require('../config/dbConfig.js');

const {Sequelize, Op, Model, DataTypes} = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        aquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Conncted....');
    })
    .catch((err) => {
        console.log('Error' + err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/user.js')(sequelize, DataTypes);
// db.organizations = require('./organizationsModal.js')(sequelize, DataTypes);
//association

db.sequelize.sync({force: false}).then(() => {
    console.log('Yes Sync is Done');
});

module.exports = db;
