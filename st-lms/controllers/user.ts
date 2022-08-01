import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import db from "../config/connect";
import { User } from "../models/user";
const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const uid: string = uuid();
    req.body.id = uid;
    await User.create(req.body);
    res.status(200).json({ message: "save" });
  } catch (err) {
    res.status(500).json(err);
  }
};
const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: User[] = await User.findAll();
    res.status(200).json({ data: users });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const uid: string = req.params.id;
    const user: User | null = await User.findByPk(uid);
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(500).json(err);
  }
};
const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const uid: string = req.params.id;
    await User.update(req.body, { where: { id: uid } });
    res.status(200).json({ message: "update success" });
  } catch (err) {
    res.status(500).json(err);
  }
};
const removeUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const uid: string = req.params.id;
    await User.destroy({ where: { id: uid } });
    res.status(200).json({ message: "remove" });
  } catch (err) {}
};
export default { addUser, getUser, getUserById, updateUser, removeUser };
