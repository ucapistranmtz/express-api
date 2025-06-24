import { Request, Response } from 'express';
import { UserService} from '../services/user.service';

const userService =  new UserService();

export const getAllUsers = async (req:Request,res:Response )=> {
    const users = await userService.getAllUsers();
    res.json(users)

}