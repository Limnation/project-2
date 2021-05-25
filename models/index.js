const Cart = require("./Cart");
const Product = require("./Product");
const User = require("./User");
const Type = require("./Type");

// User.hasOne(Cart) will create a one-to-one association with User as the source and Cart as the target. This means the foreign key for Cart will be added to the User model (inverse of belongsTo).
User.hasOne(Cart, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Product.hasOne(Cart) will create a one-to-one association with Product as the source and Cart as the target. This means the foreign key for Cart will be added to the Product model (inverse of belongsTo).
Product.hasOne(Cart, {
  // product_id is a foreign key in the Cart table.
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

// Type.hasOne(Product) will create a one-to-one association with Type as the source and Product as the target. This means the foreign key for Product will be added to the Type model (inverse of belongsTo).
Type.hasOne(Product, {
  // type_id is a foreign key in the Product table.
  foreignKey: "type_id",
  onDelete: "CASCADE",
});

module.exports = {
  Cart,
  Product,
  User,
  Type,
};
