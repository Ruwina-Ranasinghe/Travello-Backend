import express from "express"
import {getFeedPosts, getUserPosts, likePost} from "../controlers/posts.js";
import { verifyToken } from "../middlewere/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;