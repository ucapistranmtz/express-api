"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_service_1 = require("../services/user.service");
const userService = new user_service_1.UserService();
const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
};
exports.getAllUsers = getAllUsers;
