import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import * as bcrypt from "bcryptjs";
import { OkPacket, RowDataPacket } from "mysql2";
import { dbConnect } from "../app";
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(500).json({ errors: error.array() });
  }
  try {
    const rowQuery = dbConnect.query("SELECT email FROM Users WHERE email=?", [
      req.body.email,
    ]);
    const row = (<RowDataPacket>rowQuery)[0];
    if (row.length > 0) {
      return res.status(201).json({ message: "email present" });
    }
    const hashPass = bcrypt.hash(req.body.password, 10);
    const rowPush = await dbConnect.query(
      "INSERT INTO users(name,email,password) VALUES(?,?,?)",
      [req.body.name, req.body.email, hashPass]
    );
    const rowUser = <RowDataPacket>rowPush;
    if (rowUser.affectedRows === 1) {
      return res.status(201).json({
        message: "The user has been push.",
      });
    }
  } catch (err) {
    next(err);
  }
};
export { createUser };
