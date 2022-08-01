"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const connect_1 = __importDefault(require("../config/connect"));
const sequelize = connect_1.default.sequelize;
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    userName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: "phone_number",
    },
}, {
    sequelize,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
    underscored: true,
});
