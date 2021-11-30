const { User } = require("../models");

const userData = [
  {
    username: "James Sgarella",
    email: "James@email.com",
    password: "Password1234",
  },
  {
    username: "Sage Grayson",
    email: " Sage@email.com",
    password: "ThePassword123",
  },
  {
    username: "Chris Insignares",
    email: "Chris@email.com",
    password: "AnotherPassword123",
  },
  {
    username: "Ami Asokumar",
    email: "Ami@email.com",
    password: "ABrilliantPassword123",
    instrument_id: "",
    friendship_id: "",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
