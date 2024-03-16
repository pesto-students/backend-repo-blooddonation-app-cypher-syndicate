const db = require('../models');
const jwt = require('jsonwebtoken');
const HealthRecords = db.HealthRecord;
//main work

//1.create HealthRecord

const addHealthRecord = async (req, res) => {
    let info = {
        donorId: req.body.fullName,
        bloodPressureSystolic: req.body.bloodPressureSystolic,
        bloodPressureDiastolic: req.body.bloodPressureDiastolic,
        heartRate: req.body.heartRate,
        height: req.body.height,
        weight: req.body.weight,
        bloodGroup: req.body.bloodGroup,
        lastDonationDate: req.body.lastDonationDate,
        nextDonationDate: req.body.nextDonationDate,
        medicalHistory: req.body.medicalHistory
    };
    const user = await HealthRecords.create(info);
    res.status(200).send(user);
};

//2 get all HealthRecord

const getAllHealthRecords = async (req, res) => {
    try {
        let hRecords = await HealthRecords.findAll({});
        if (hRecords) {
            res.status(200).send(hRecords);
        } else {
            res.status(404).json({message: 'No User Found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//3 get single HealthRecord

const getHealthRecord = async (req, res) => {
    try {
        const hRecord = await HealthRecords.findOne(req.params.id);
        if (hRecord) {
            res.status(200).json(hRecord);
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//4 Update HealthRecord

const updateHealthRecord = async (req, res) => {
    try {
        let id = req.params.id;
        const user = await HealthRecords.update(req.body, {where: {id: id}});
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//5 delete HealthRecord

const deleteHealthRecord = async (req, res) => {
    let id = req.params.id;
    try {
        if (id) {
            await HealthRecords.destroy({where: {id: id}});
            res.status(200).send('User Deleted');
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    addHealthRecord,
    getAllHealthRecords,
    getHealthRecord,
    updateHealthRecord,
    deleteHealthRecord
};
