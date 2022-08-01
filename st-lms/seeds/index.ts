import db from "../config/connect";
import seedUser from "./user";

const seedAll = async () => {
  await db.sequelize.sync();
  await seedUser();
};
seedAll();
