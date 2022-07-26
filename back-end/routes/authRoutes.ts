import express from "express";
import { body } from "express-validator";
import { createUser, signInUser } from "../controllers/resisterController";
const authRouter = express.Router();
authRouter.post(
  "/register",
  [
    body("name", "The name must be of minimum 3 characters length")
      .notEmpty()
      .escape()
      .trim()
      .isLength({ min: 3 }),
    body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
    body("password", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),
  ],
  createUser
);
authRouter.post(
  "/signin",
  [
    body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
    body("password", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),
  ],
  signInUser
);
export { authRouter };
