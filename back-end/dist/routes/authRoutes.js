"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const resisterController_1 = require("../controllers/resisterController");
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter.post("/register", [
    (0, express_validator_1.body)("name", "The name must be of minimum 3 characters length")
        .notEmpty()
        .escape()
        .trim()
        .isLength({ min: 3 }),
    (0, express_validator_1.body)("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
    (0, express_validator_1.body)("password", "The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
], resisterController_1.createUser);
authRouter.post("/signin", [
    (0, express_validator_1.body)("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
    (0, express_validator_1.body)("password", "The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
], resisterController_1.signInUser);
