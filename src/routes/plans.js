const planController = require('../controllers/plan');

const planRouter = require('express').Router();

planRouter.post('/addPlan', planController.createPlan);
planRouter.get('/:id', planController.getPlan);
planRouter.get('/getPlans', planController.getPlans);
planRouter.put('/:id', planController.updatePlan);
planRouter.delete('/:id', planController.deletePlan);

module.exports = planRouter;
