import express from "express";
import{
    getUser,
    getUserFriends,
    addRemoveFriends
} from "../controlers/users.js";
import { verifyToken } from "../middlewere/auth.js";

const router = express.Router();

/*READ */
router.get("/:id" , verifyToken, getUser);
router.get("/:id/friends",verifyToken, getUserFriends);

/*UPDATE */
router.patch("/:id/:friendId",verifyToken, addRemoveFriends);

export default router;