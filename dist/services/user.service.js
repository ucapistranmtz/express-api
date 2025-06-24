"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("../models/user.model");
class UserService {
    getAllUsers() {
        return user_model_1.users;
    }
}
exports.UserService = UserService;
