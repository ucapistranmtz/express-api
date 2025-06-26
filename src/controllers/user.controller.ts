
import {Request,Response,RequestHandler} from 'express';
import {CreateUserSchema, UserDto,UserSchema} from '../models/user.schema'
import  * as userService from '../services/user.service';


export const getAllUsers:RequestHandler = async (req:Request,res:Response) => {
    let users:UserDto[]=[];
    try {
         users = await userService.getAllUsers();
         res.status(200).json(users);
    } catch (error) {
          res.status(500).json({message:'An error ocurred we are no able to retrive all users. try later'})
    }
 
}


export const createNewUser:RequestHandler= async (req:Request,res:Response)=> {

    try {
       const validSchema = CreateUserSchema.safeParse(req.body);

       if(!validSchema.success){
         res.status(400).json({
            message:'Invalid format',
            error:validSchema.error.format()
         });
       }else {
         const newUser = await userService.createNewUser(validSchema.data);
         res.status(200).json(newUser)
       }
    
    } catch (error) {
        res.status(500).json({message:'An error ocurred while creating the new user'});
    }

}