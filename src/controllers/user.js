// const { User } = require("../models/user");

// const getUsers = async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getUserById = async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.userId);
//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createUser = async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updateUser = async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.userId);
//     if (user) {
//       await user.update(req.body);
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.userId);
//     if (user) {
//       await user.destroy();
//       res.status(204).json({ message: "User deleted" });
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// };

const db = require('../models');
const jwt = require('jsonwebtoken');
const Users = db.users;
//main work

//1.create users

const addUser = async (req, res) => {
    let info = {
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        bloodGroup: req.body.bloodGroup,
        contactNumber: req.body.contactNumber
    };
    const user = await Users.create(info);
    res.status(200).send(user);
};

//2 get all users

const getAllUsers = async (req, res) => {
    try {
        let users = await Users.findAll({});
        if (users) {
            res.status(200).send(users);
        } else {
            res.status(404).json({message: 'No User Found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//3 get single user

const getOneUser = async (req, res) => {
    try {
        const user = await Users.findOne(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//4 Update User

const updateUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = await Users.update(req.body, {where: {id: id}});
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//5 delete user

const deleteUser = async (req, res) => {
    let id = req.params.id;
    try {
        if (id) {
            await Users.destroy({where: {id: id}});
            res.status(200).send('User Deleted');
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
};
