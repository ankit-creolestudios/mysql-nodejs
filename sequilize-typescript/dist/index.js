"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./config/connection"));
const server_1 = __importDefault(require("./server/server"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
server_1.default.use(express_1.default.json());
console.log(process.env.DB_HOST, process.env.PORT);
connection_1.default.sync({ force: false }).then(() => {
    server_1.default.listen(process.env.PORT, () => {
        console.log(`server listen port ${process.env.PORT}`);
    });
});
