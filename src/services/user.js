import { User } from "./models/user";

const createUser = async (user) => {
  return await User.create(user);
};

const findAllUsers = async () => {
  return await User.findAll();
};

const findUserById = async (id) => {
  return await User.findByPk(id);
};

const updateUser = async (id, user) => {
  const existingUser = await User.findByPk(id);
  if (existingUser) {
    return await existingUser.update(user);
  }
  return null;
};

const deleteUser = async (id) => {
  const existingUser = await User.findByPk(id);
  if (existingUser) {
    return await existingUser.destroy();
  }
  return null;
};

export { createUser, findAllUsers, findUserById, updateUser, deleteUser };
