const { Genre } = require("../models");
//These are autoincremented
const genreData = [
  {
    genre_name: "Rock",
  },
  {
    genre_name: "Pop",
  },
  {
    genre_name: "Country",
  },
  {
    genre_name: "Hip Hop",
  },
  {
    genre_name: "R & B",
  },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;
