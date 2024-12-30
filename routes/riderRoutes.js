import express from "express";
import { addRider, getRiders } from "../controllers/riderController.js";
import { upload, handleMulterError } from "../middleware/file-upload.js";

const router = express.Router();

// POST - Add a rider with profile image
// router.post('/add-rider', upload.single('profileImage'), addRider);
router.post("/add-rider", upload.single("profileImage"), addRider);
router.get("/get-riders", getRiders);
router.use(handleMulterError);

export default router;
