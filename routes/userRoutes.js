// routes/userRoutes.js
import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:userId", deleteUser);
router.put("/:userId", updateUser);

export default router;