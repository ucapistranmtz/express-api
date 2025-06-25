import userService from '../services/user.services';
import {Request, Response} from 'express';


const getAllUsers = async (req:Request,res:Response)=> {
console.log('Fetching all users');
    const users = await userService.getAllUsers();
    res.json(users)
}


export default {
    getAllUsers
}