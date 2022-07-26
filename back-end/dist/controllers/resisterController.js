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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUser = exports.createUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt = __importStar(require("bcryptjs"));
const app_1 = require("../app");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const QueryString = `SELECT * FROM users WHERE LOWER(email) = LOWER(${app_1.dbConnect.escape(req.body.email)})`;
    console.log(req.body);
    app_1.dbConnect.query(QueryString, (err, result) => {
        if (result === null || result === void 0 ? void 0 : result.length) {
            return res.status(500).json({ message: "Email in use" });
        }
        else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                const queryInsertString = `INSERT INTO users VALUES(${null},'${req.body.name}',${app_1.dbConnect.escape(req.body.email)},${app_1.dbConnect.escape(hash)})`;
                app_1.dbConnect.query(queryInsertString, (err) => {
                    if (err) {
                        return res.status(500).json({ message: err });
                    }
                    else {
                        return res.status(200).json({ message: "user register" });
                    }
                });
            });
        }
    });
});
exports.createUser = createUser;
const signInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    if (email && password) {
        const queryString = `SELECT * FROM users WHERE LOWER(email) = LOWER(${app_1.dbConnect.escape(req.body.email)})`;
        app_1.dbConnect.query(queryString, (err, result) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            if ((result === null || result === void 0 ? void 0 : result.length) === 0) {
                return res
                    .status(500)
                    .json({ message: "email or password is not correct" });
            }
            bcrypt.compare(req.body.password, result[0].password, (perr, presult) => {
                if (perr) {
                    return res.status(500).json({
                        message: "email or password is not correct",
                    });
                }
                if (presult) {
                    const token = jsonwebtoken_1.default.sign({ id: result[0].id }, "strong secret", {
                        expiresIn: "1h",
                    });
                    // const siginQueryUserUpdate = `UPDATE users SET lasLogin=now() WHERE id='${result[0].id}'`;
                    // dbConnect.query(siginQueryUserUpdate);
                    return res
                        .status(200)
                        .json({ message: "signin user", token, res: result[0] });
                }
            });
        });
    }
    else {
        return res
            .status(500)
            .json({ message: "please provide email and password " });
    }
});
exports.signInUser = signInUser;
