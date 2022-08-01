"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const users = [
    {
        userName: "ankit",
        name: "ankit",
        email: "ankit.kumar@gmail.com",
        phoneNumber: "9191991919",
    },
];
const seedUser = () => user_1.User.bulkCreate(users);
exports.default = seedUser;
