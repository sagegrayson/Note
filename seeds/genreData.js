const { Genre } = require("../models");

const genreData = [
  {
    name: "Rock",
  },
  {
    name: "Pop",
  },
  {
    name: "Folk",
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
