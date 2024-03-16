const {sequelize} = require('../database/db');
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bloodGroup: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true
        },
        healthRecords: {
            type: DataTypes.JSON,
            allowNull: true
        },
        socialRankRaring: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        verifiedBadge: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    });

    return Users;
};
