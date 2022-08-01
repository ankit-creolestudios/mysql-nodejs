const seedProduct = require("./ProductSeed");
const seedCategory = require("./CategorySeed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCategory();
  await seedProduct();
  process.exit(0);
};
seedAll();
