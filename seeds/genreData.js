const { Genre } = require("../models");

const genreData = [
  {
    genre_name: "Rock",
  },
  {
    genre_name: "Pop",
  },
  {
    genre_name: "Metal",
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
