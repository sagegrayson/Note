const { User } = require("../models");

const userData = [
  {
    username: "JamesSgarella",
    email: "James@email.com",
    password: "Password1234",
  },
  {
    username: "SageGrayson",
    email: " Sage@email.com",
    password: "ThePassword123",
  },
  {
    username: "ChrisInsignares",
    email: "Chris@email.com",
    password: "AnotherPassword123",
  },
  {
    username: "AmiAsokumar",
    email: "Ami@email.com",
    password: "ABrilliantPassword123",
    instrument_id: "",
    friendship_id: "",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
