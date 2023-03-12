const { Reviews } = require("../models");

const reviewsData = [
  {
    reviewtext: "This place is great!",
    locale_id: 1,
    user_id: 1,
  },
  {
    reviewtext: "Don't get the shrimp",
    locale_id: 1,
    user_id: 2,
  },
  {
    reviewtext: "Great atmosphere",
    locale_id: 1,
    user_id: 3,
  },
  {
    reviewtext: "They have food",
    locale_id: 2,
    user_id: 2,
  },
];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;
