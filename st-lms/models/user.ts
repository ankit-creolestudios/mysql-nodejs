import { Sequelize, Model, DataTypes } from "sequelize";
import db from "../config/connect";
import { Book } from "./book";
const sequelize: Sequelize = db.sequelize;
class User extends Model {
  declare userName: string;
  declare name: string;
  declare email: string;
  declare phoneNumber: string;
}
User.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    userName: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "phone_number",
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  }
);
// User.hasMany(Book, { foreignKey: "book_id" });
export { User };
