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
  // {
  //   username: "ChrisInsignares",
  //   email: "Chris@email.com",
  //   password: "AnotherPassword123",
  //   instrument_id: "",
  //   friendship_id: "",
  // },
  // {
  //   username: "AmiAsokumar",
  //   email: "Ami@email.com",
  //   password: "ABrilliantPassword123",
  //   instrument_id: "",
  //   friendship_id: "",
  // },
  // {
  //   username: "KaiGerstley",
  //   email: "Kai@email.com ",
  //   password: "PasswordIsincorrect123",
  //   instrument_id: "",
  //   friendship_id: "",
  // },
  // {
  //   username: "John Doe",
  //   email: "TheRealJohnDoe@email.com",
  //   password: "AStandardPassword123",
  //   instrument_id: "",
  //   friendship_id: "",
  // },
  // {
  //   username: "Doe John",
  //   email: "NotJohnDoe@email.com",
  //   password: "AFancyPassword123",
  //   instrument_id: "",
  //   friendship_id: "",
  // },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
