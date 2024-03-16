const {Plan} = require('../models/Plan');

const getPlans = async (req, res) => {
    try {
        const plans = await Plan.findAll();
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getPlan = async (req, res) => {
    try {
        const plan = await Plan.findByPk(req.params.planId);
        if (plan) {
            res.status(200).json(plan);
        } else {
            res.status(404).json({message: 'Plan not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createPlan = async (req, res) => {
    try {
        const plan = await Plan.create(req.body);
        res.status(201).json(plan);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updatePlan = async (req, res) => {
    try {
        const plan = await Plan.findByPk(req.params.planId);
        if (plan) {
            await plan.update(req.body);
            res.status(200).json(plan);
        } else {
            res.status(404).json({message: 'Plan not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deletePlan = async (req, res) => {
    try {
        const plan = await Plan.findByPk(req.params.planId);
        if (plan) {
            await plan.destroy();
            res.status(204).json({message: 'Plan deleted'});
        } else {
            res.status(404).json({message: 'Plan not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getPlans,
    getPlan,
    createPlan,
    updatePlan,
    deletePlan
};
