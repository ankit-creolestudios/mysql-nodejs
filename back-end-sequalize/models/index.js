const Product = require("./Product");
const Category = require("./Category");
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});
module.exports = { Product, Category };
