import { Router } from 'express';
import BuildOrders from './buildOrderRoutes';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/build_orders', BuildOrders);

// Export the base-router
export default router;
