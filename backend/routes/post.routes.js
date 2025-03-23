import express from "express";
import { protectRoutes } from "../middleware/protectRoutes.js";
import { 
    getFollowingPosts,
    getLikedPosts,
    getAllPosts,
    likeUnlikePost,
    commentOnPost,
    deletePost,
    createPost,
    getUserPosts
} from "../controllers/post.controller.js";


const router = express.Router();

router.get("/all",protectRoutes, getAllPosts);
router.get("/following",protectRoutes, getFollowingPosts);
router.get("/likes/:id",protectRoutes, getLikedPosts);
router.get("/user/:username",protectRoutes, getUserPosts);
router.post("/create",protectRoutes,createPost);
router.post("/like/:id",protectRoutes,likeUnlikePost);
router.post("/comment/:id",protectRoutes,commentOnPost);
router.delete("/:id",protectRoutes,deletePost);

export default router;