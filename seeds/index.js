const sequelize = require("../config/connection");
const seedGenre = require("./genreData.js");
const seedUser = require("./Users.js");
const seedInstrument = require("./instruments.js");
const seedPosts = require("./posts.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGenre();

  await seedUser();

  await seedInstrument();

  await seedPosts();

  process.exit(0);
};

seedAll();
