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
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const user_1 = require("../models/user");
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uid = (0, uuid_1.v4)();
        req.body.id = uid;
        yield user_1.User.create(req.body);
        res.status(200).json({ message: "save" });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.User.findAll();
        res.status(200).json({ data: users });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uid = req.params.id;
        const user = yield user_1.User.findByPk(uid);
        res.status(200).json({ data: user });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uid = req.params.id;
        yield user_1.User.update(req.body, { where: { id: uid } });
        res.status(200).json({ message: "update success" });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uid = req.params.id;
        yield user_1.User.destroy({ where: { id: uid } });
        res.status(200).json({ message: "remove" });
    }
    catch (err) { }
});
exports.default = { addUser, getUser, getUserById, updateUser, removeUser };
