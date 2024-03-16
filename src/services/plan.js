import { Plan } from "./models/Plan";

const createPlan = async (plan) => {
  return await Plan.create(plan);
};

const findAllPlans = async () => {
  return await Plan.findAll();
};

const findPlanById = async (id) => {
  return await Plan.findByPk(id);
};

const updatePlan = async (id, plan) => {
  const existingPlan = await Plan.findByPk(id);
  if (existingPlan) {
    return await existingPlan.update(plan);
  }
  return null;
};

const deletePlan = async (id) => {
  const existingPlan = await Plan.findByPk(id);
  if (existingPlan) {
    return await existingPlan.destroy();
  }
  return null;
};

export { createPlan, findAllPlans, findPlanById, updatePlan, deletePlan };
