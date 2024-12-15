import express from 'express'

import { signIn } from '../controllers/authController.js'
const router = express.Router();

// POST: Admin Sign-In
router.post('/signin', signIn);

export default router;
