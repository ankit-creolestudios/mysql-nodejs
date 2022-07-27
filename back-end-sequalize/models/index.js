const Product = require("./Product");
const Category = require("./Category");
const User = require("'./User");
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});
module.exports = { Product, Category, User };
