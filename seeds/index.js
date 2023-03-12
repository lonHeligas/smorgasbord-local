const sequelize = require("../config/connection");
const seedLocales = require("./localesData");
const seedUser = require("./userData");
const seedReviews = require("./reviewData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedLocales();

  await seedReviews();

  process.exit(0);
};

seedAll();
