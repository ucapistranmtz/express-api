import { Router } from 'express';
import {getAllUsers} from '../controller/user.controller';
const userRoutes = Router();

 userRoutes.get('/all', getAllUsers);

export default userRoutes;