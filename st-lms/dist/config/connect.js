"use strict";
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
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbName = `${process.env.DB_NAME}`;
const dbUser = `${process.env.DB_USER}`;
const dbPwd = `${process.env.DB_PWD}`;
// const dbHost: string = "[localhost]";
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPwd, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
        decimalNumbers: true,
    },
});
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            sequelize.authenticate();
            console.log("connection successful");
            return true;
        }
        catch (err) {
            console.error("unable to connect", err);
            return false;
        }
    });
}
exports.default = { sequelize, testConnection };
