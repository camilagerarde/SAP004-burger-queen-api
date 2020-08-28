import { Router } from 'express';
import MenuController from '../controllers/MenuController';

const router = Router();
router.get('/', MenuController.getAllMenu);
router.get('/:id', MenuController.getMenu);
router.post('/', MenuController.addMenu);
router.put('/:id', MenuController.updatedMenu);
router.delete('/:id', MenuController.deleteMenu);
export default router;
