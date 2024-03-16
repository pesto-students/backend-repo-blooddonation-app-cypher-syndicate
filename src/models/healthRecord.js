const {sequelize} = require('../database/db');
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const HealthRecord = sequelize.define('healthRecords', {
        donorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Donors',
                key: 'id'
            }
        },
        bloodPressureSystolic: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bloodPressureDiastolic: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        heartRate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        bloodGroup: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastDonationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        nextDonationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        medicalHistory: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return HealthRecord;
};
