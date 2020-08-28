import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const router = Router();
router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getOrder);
router.post('/', OrderController.addOrder);
router.put('/:id', OrderController.updatedOrder);
router.delete('/:id', OrderController.deleteOrder);
export default router;
