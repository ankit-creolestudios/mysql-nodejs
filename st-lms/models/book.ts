import { Sequelize, Model, DataTypes } from "sequelize";
import db from "../config/connect";
const sequelize: Sequelize = db.sequelize;
class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: "books", timestamps: true, freezeTableName: true }
);
export { Book };
