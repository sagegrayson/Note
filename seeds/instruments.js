const { User } = require("../models");

const userData = [
  {
    instrument_name: "",
    user_id: "",
  },
  {
    instrument_name: "",
    user_id: "",
  },
  {
    instrument_name: "",
    user_id: "",
  },
  {
    instrument_name: "",
    user_id: "",
  },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;
