import userService from '../services/user.services';
import {Request, Response} from 'express';


const getAllUsers = async (req: Request, res: Response) => {
    const users = await userService.getAllUsers();
    res.json(users);
};

const getUserById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await userService.getUserById(id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.json(user);
    }
};

const createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
};

export default {
    getAllUsers,
    getUserById,
    createUser,
};
