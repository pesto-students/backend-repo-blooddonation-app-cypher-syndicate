const { Organization } = require("../models/organization");

const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.findAll();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrganizationById = async (req, res) => {
  try {
    const organization = await Organization.findByPk(req.params.organizationId);
    if (organization) {
      res.status(200).json(organization);
    } else {
      res.status(404).json({ message: "Organization not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOrganization = async (req, res) => {
  try {
    const organization = await Organization.create(req.body);
    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByPk(req.params.organizationId);
    if (organization) {
      await organization.update(req.body);
      res.status(200).json(organization);
    } else {
      res.status(404).json({ message: "Organization not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByPk(req.params.organizationId);
    if (organization) {
      await organization.destroy();
      res.status(204).json({ message: "Organization deleted" });
    } else {
      res.status(404).json({ message: "Organization not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOrganizations,
  getOrganizationById,
  createOrganization,
  updateOrganization,
  deleteOrganization,
};
