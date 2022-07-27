const seedProduct = require("./ProductSeed");
const seedCategory = require("./CategorySeed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("sync seed");
  await seedCategory();
  console.log("category seed");
  await seedProduct();
  console.log("product seed");
  process.exit(0);
};
seedAll();
