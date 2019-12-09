import {Router} from 'express';
import SimpleAuth from '../middleware/simpleAuth';
import BuildOrderController from '../controllers/BuildOrderController';

// Init shared
const router = Router();

router.get('/', new BuildOrderController().index);
router.post('/', new BuildOrderController().create);
router.get('/:buildOrderID', new BuildOrderController().show);
router.put('/:buildOrderID', new SimpleAuth().authenticateWithPassword, new BuildOrderController().update);
router.delete('/:buildOrderID', new SimpleAuth().authenticateWithPassword, new BuildOrderController().delete);

export default router;
