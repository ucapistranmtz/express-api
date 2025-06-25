import  userController from '../controllers/user.controllers'
import {Router} from 'express';

const router=  Router();


router.get('/all',userController.getAllUsers);
//router.get('/:id',userController.getUserById);



export default router

