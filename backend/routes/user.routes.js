import express from 'express';
import { protectRoutes } from '../middleware/protectRoutes.js';
import { updateUser, getUserProfile, followUnfollowUser,getSuggestedUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/profile/:username",protectRoutes,getUserProfile)
router.get("/suggested",protectRoutes,getSuggestedUsers)
router.post("/follow/:id",protectRoutes,followUnfollowUser)
router.post("/update",protectRoutes,updateUser)



export default router;