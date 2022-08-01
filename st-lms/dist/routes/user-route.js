"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../controllers/user"));
const router = express_1.default.Router();
router.post("/add-user", user_1.default.addUser);
router.get("/", user_1.default.getUser);
router.get("/:id", user_1.default.getUserById);
router.put("/:id", user_1.default.updateUser);
router.delete("/:id", user_1.default.removeUser);
exports.default = router;
