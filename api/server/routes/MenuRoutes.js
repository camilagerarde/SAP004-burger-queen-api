import { Router } from 'express';
import MenuController from '../controllers/MenuController';

const router = Router();
router.get('/', MenuController.getAllMenu);
router.get('/:id', MenuController.getProduct);
router.post('/', MenuController.addProduct);
router.put('/:id', MenuController.updatedProduct);
router.delete('/:id', MenuController.deleteProduct);
export default router;
