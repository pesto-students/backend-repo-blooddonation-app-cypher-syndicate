import { Organization } from "./models/organization";

const createOrganization = async (organization) => {
  return await Organization.create(organization);
};

const findAllOrganizations = async () => {
  return await Organization.findAll();
};

const findOrganizationById = async (id) => {
  return await Organization.findByPk(id);
};

const updateOrganization = async (id, organization) => {
  const existingOrganization = await Organization.findByPk(id);
  if (existingOrganization) {
    return await existingOrganization.update(organization);
  }
  return null;
};

const deleteOrganization = async (id) => {
  const existingOrganization = await Organization.findByPk(id);
  if (existingOrganization) {
    return await existingOrganization.destroy();
  }
  return null;
};

export {
  createOrganization,
  findAllOrganizations,
  findOrganizationById,
  updateOrganization,
  deleteOrganization,
};
