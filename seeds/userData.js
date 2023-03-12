const { Users } = require("../models");

const userData = [
  {
    name: "Han Solo",
    email: "han.solo@example.com",
    password: "password",
  },
  {
    name: "Princess Diana",
    email: "princess.diana@example.com",
    password: "password",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password",
  },
];

const seedUser = () => Users.bulkCreate(userData);

module.exports = seedUser;
