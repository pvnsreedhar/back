/** source/routes */
import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.post('/valid-insurance', controller.validInsurance);

export default router;