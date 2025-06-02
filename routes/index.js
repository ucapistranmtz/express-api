import express from 'express';
import { productRouter } from './products.js';
import { validationMiddleware } from '../middlewares/validationMiddleware.js';
const router = express.Router();

router.use('/products', validationMiddleware, productRouter);
export default router;
