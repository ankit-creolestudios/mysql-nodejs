"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const mysql2_1 = __importDefault(require("mysql2"));
const bodyParser = __importStar(require("body-parser"));
const orderRoutes_1 = require("./routes/orderRoutes");
dotenv.config();
const app = (0, express_1.default)();
app.use(bodyParser.json());
// database connect
exports.dbConnect = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
});
exports.dbConnect.connect((err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("mysql connect");
    }
});
app.use("/order", orderRoutes_1.orderRouter);
app.listen(process.env.PORT || 4000, () => {
    console.log("server start port " + process.env.PORT);
});
