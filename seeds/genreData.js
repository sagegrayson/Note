const { Genre } = require("../models");
//These are autoincremented
const genreData = [
  {
    name: "Rock",
  },
  {
    name: "Rap",
  },
  {
    name: "Country",
  },
  {
    name: "Folk",
  },
  {
    name: "Pop",
  },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;
