const User = require("./User.js");
const Instrument = require("./instrument.js");
const Post = require("./post.js");
const Genre = require("./Genre.js");

Post.belongsTo(Genre, {
  foreignKey: "genre_id",
});
Genre.hasMany(Post, {
  foreignKey: "genre_id",
});
User.hasMany(Post, {
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  foreignKey: "user_id",
});
// Post.belongsTo(Genre, {
//   foreignKey: "genre_id",
// });
User.hasMany(Instrument, {
  foreignKey: "user_id",
});

//this is a base, might need to be reworked depending on seed data
module.exports = {
  User,
  Instrument,
  Post,
  Genre,
};
