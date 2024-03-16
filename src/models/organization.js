const {sequelize} = require('../database/db');
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const organizations = sequelize.define('organizations', {
        oid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: () => sequelize.literal('uuid_generate_v4()')
        },
        name: {
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
        contactNumber: {
            type: DataTypes.STRING
        },
        token: {
            type: DataTypes.STRING
        },
        socialRankRaring: {
            type: DataTypes.INTEGER
        },
        verifiedBadge: {
            type: DataTypes.BOOLEAN
        }
    });
    return organizations;
};

sequelize.sync({force: true});
