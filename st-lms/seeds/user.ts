import { User } from "../models/user";
const users = [
  {
    userName: "ankit",
    name: "ankit",
    email: "ankit.kumar@gmail.com",
    phoneNumber: "9191991919",
  },
];
const seedUser = () => User.bulkCreate(users);
export default seedUser;
