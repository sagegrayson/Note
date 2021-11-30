const { User } = require("../models");

const userData = [
  {
    username: "James Sgarella",
    email: "James@email.com",
    password: "moomoo",
  },
  {
    username: "Sage Grayson",
    email: " Sage@email.com",
    password: "moomoo",
  },
  {
    username: "Chris Insignares",
    email: "Chris@email.com",
    password: "moomoo",
  },
  {
    username: "Ami Asokumar",
    email: "Ami@email.com",
    password: "moomoo",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
