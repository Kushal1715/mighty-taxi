import express from 'express'
import upload from '../config/multer.js';
import { addRider } from '../controllers/riderController.js';

const router = express.Router();

// POST - Add a rider with profile image
router.post('/add-rider', upload.single('profileImage'), addRider);

export default router;
