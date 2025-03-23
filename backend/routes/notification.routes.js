import express from "express";
import {protectRoutes} from "../middleware/protectRoutes.js";
import {getNotifications, deleteNotifications,} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoutes, getNotifications);
router.delete("/", protectRoutes, deleteNotifications);


export default router;
