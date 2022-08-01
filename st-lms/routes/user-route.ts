import express, { Router } from "express";
import userController from "../controllers/user";
const router: Router = express.Router();

router.post("/add-user", userController.addUser);
router.get("/", userController.getUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.removeUser);
export default router;
