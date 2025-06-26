import {Request,Response,RequestHandler} from 'express'
import  * as  userService from '../services/user.service'

export const getAllUsers:RequestHandler=(req:Request,res:Response)=> {

    try {
        const users = userService.getAllUsers();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:'There was an error getting all the users'})
    }

}


export default { getAllUsers} 