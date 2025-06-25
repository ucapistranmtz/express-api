import userController from '../controllers/user.controllers';
import { Router } from 'express';

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);

export default router;

