import express, { Request, Response } from "express";
import db from "./config/connect";
import dotenv from "dotenv";
import userRouter from "./routes/user-route";
dotenv.config();
const app = express();

app.use(express.json());
app.get("/", (req: Request, res: Response): void => {
  res.send("get connect");
});
app.use("/user", userRouter);
db.sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server run port ${process.env.PORT}`);
  });
});
