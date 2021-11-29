const { Genre } = require("../models");
//These are autoincremented
const genreData = [
  {
    name: "Rock",
  },
  {
    name: "Pop",
  },
  {
    genre_name: "Country",
  },
  {
    name: "Hip Hop",
  },
  {
    name: "R & B",
  },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;
