const healthRecordController = require('../controllers/healthRecord');

const healthRecord = require('express').Router();

healthRecord.post('/addUser', healthRecordController.addHealthRecord);
healthRecord.get('/getUsers', healthRecordController.getAllHealthRecords);
healthRecord.get('/:id', healthRecordController.getHealthRecord);
healthRecord.put('/:id', healthRecordController.updateHealthRecord);
healthRecord.delete('/:id', healthRecordController.deleteHealthRecord);

module.exports = healthRecord;
