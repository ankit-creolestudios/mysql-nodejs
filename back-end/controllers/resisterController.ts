import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { dbConnect } from "../app";
import { BasicUser, User } from "../types/User";
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const QueryString = `SELECT * FROM users WHERE LOWER(email) = LOWER(${dbConnect.escape(
    req.body.email
  )})`;
  console.log(req.body);
  dbConnect.query(QueryString, (err: Error, result: User[]) => {
    if (result?.length) {
      return res.status(500).json({ message: "Email in use" });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        const queryInsertString = `INSERT INTO users VALUES(${null},'${
          req.body.name
        }',${dbConnect.escape(req.body.email)},${dbConnect.escape(hash)})`;
        dbConnect.query(queryInsertString, (err: Error) => {
          if (err) {
            return res.status(500).json({ message: err });
          } else {
            return res.status(200).json({ message: "user register" });
          }
        });
      });
    }
  });
};
const signInUser = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email && password) {
    const queryString = `SELECT * FROM users WHERE LOWER(email) = LOWER(${dbConnect.escape(
      req.body.email
    )})`;
    dbConnect.query(queryString, (err: Error, result: User[]) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      if (result?.length === 0) {
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
          const token = jwt.sign({ id: result[0].id }, "strong secret", {
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
  } else {
    return res
      .status(500)
      .json({ message: "please provide email and password " });
  }
};
export { createUser, signInUser };
