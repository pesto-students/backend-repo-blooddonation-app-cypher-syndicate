const {sequelize} = require('../database/db');
const {DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const plans = sequelize.define('plan', {
        planId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        plan: {
            type: DataTypes.JSON,
            allowNull: false
        },
        payment: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        planName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return plans;
};
