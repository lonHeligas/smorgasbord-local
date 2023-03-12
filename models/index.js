const Locales = require("./Locales");
const Users = require("./Users");
const Reviews = require("./Reviews");

Users.hasMany(Locales, {
  foreignKey: "user_id",
});

Locales.belongsTo(Users, {
  foreignKey: "user_id",
});

Users.hasMany(Reviews, {
  foreignKey: "user_id",
});

Reviews.belongsTo(Users, {
  foreignKey: "user_id",
});

Locales.hasMany(Reviews, {
  foreignKey: "locale_id",
});

Reviews.belongsTo(Locales, {
  foreignKey: "locale_id",
});

module.exports = {
  Users,
  Locales,
  Reviews,
};
