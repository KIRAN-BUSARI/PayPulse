import express from 'express'
import { getUserDetails, signin, signup, updateDetails } from '../controllers/user.controller.js';
import { authMiddleware } from '../middleware/user.middleware.js';

const router = express.Router()

router.post('/signup', signup);
router.post('/signin', signin);
router.put('/updateDetails', authMiddleware, updateDetails);
router.get("/getDetails", getUserDetails);

export default router;