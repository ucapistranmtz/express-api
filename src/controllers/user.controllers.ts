import * as userService from '../services/user.service';
import {Request, Response, NextFunction} from 'express';
import {UserSchema,UserDto} from '../models/user.schema'
import { RequestHandler } from 'express';



export const getAllUsers: RequestHandler = async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
};

// Example controller function
export const getUser: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUser(Number(id));
    if (!user) {
        res.status(404).json({ message: 'user not found' });
        return;
    }
    res.status(200).json(user);
};

 

export const deleteUser: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUser(Number(id));
    if (!user) {
        res.status(404).json({ message: 'user not found' });
        return;
    }
    try {
           await userService.deleteUser(Number(id));
    } catch (error) {
         res.status(500).json({ message: 'error deleteting user' });
    }
 
    res.status(200).json({ message: 'User deleted successfully' });
};

export const newUser: RequestHandler = async (req, res) => {
    const result = UserSchema.safeParse(req.body);
    if (!result.success) {
        res.status(400).json({ message: 'Invalid user data', error: result.error.format() });
        return;
    }
    const newUser: UserDto = result.data;

    const createdUser = await userService.newUser(newUser);
    res.status(201).json(createdUser);
};









