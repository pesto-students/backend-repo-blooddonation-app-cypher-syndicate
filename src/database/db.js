const {Sequelize} = require('sequelize');
require('dotenv').config();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dialect = process.env.DIALECT;
const host = process.env.HOST;

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
    dialect: dialect,
    host: host
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('SuccessFully Connected to DB');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {sequelize, connectDB};

// router folder have all routes for each controller, bodyparser and .env npm packages need to be used
// config folder -> index.js (via config we should use .env)
//     database folder -> db files, migrations(.sequelizerc file )
// .eslintrc , prettierrc  - middleware for authentocation,

// authcontroller has be prepared from which we need to do all authentication

// HealthRecords seperate  table in the database

// create a developbranch from master for both repositorie

// https://dbeaver.io/download/
