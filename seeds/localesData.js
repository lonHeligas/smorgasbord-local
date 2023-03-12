const { Locales } = require("../models");

const localesData = [
  {
    name: "El Loro",
    type_id: "Mexican",
    price: "$$-$$$",
    address: "1428 Yankee Doodle Rd, Eagan, MN 55121",
    description: "They serve tasty mexican food.",
    user_id: 1,
  },
  {
    name: "Young Joni",
    type_id: "Pizza",
    price: "$$",
    address: "165 13th Ave NE, Minneapolis, MN 55413",
    description: "Gourmet fansy Pizza",
    user_id: 1,
  },
  {
    name: "Bravo Burritos",
    type_id: "Mexican",
    price: "$",
    address: "68 33rd Ave S, St Cloud, MN 56301",
    description: "Mission style burritos and other mexican foods.",
    user_id: 2,
  },
  {
    name: "Red Cow",
    type_id: "American",
    price: "$$",
    address: "393 Selby Ave, St. Paul, MN 55102",
    description: "Decent Burgers, good fries",
    user_id: 3,
  },
];

const seedLocales = () => Locales.bulkCreate(localesData);

module.exports = seedLocales;
