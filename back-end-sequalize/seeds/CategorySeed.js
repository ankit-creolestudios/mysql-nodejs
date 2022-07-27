const { Category } = require("../models");

const category = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Shoes",
  },
];
const seedCategory = () => Category.bulkCreate(category);
module.exports = seedCategory;
