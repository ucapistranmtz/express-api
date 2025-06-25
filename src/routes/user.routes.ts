import { Router } from 'express';
import { getAllUsers, getUser, deleteUser, newUser } from '../controllers/user.controllers';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/', newUser);

export default router;
