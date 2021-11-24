const User = require("./User.js");
const Instrument = require("./instrument.js");
const Post = require("./post.js");
const Genre = require("./Genre.js");

// Post.belongsTo(Genre, {
//   foreignKey: "genre_id",
// });
// User.hasMany(Post, {
//   foreignKey: "user_id",
// });
User.hasMany(Instrument, {
  foreignKey: "user_id",
});
// User.belongsToMany(User, {
//   as: "friend",
//   foreignKey: "friendship_id",
//   through: User,
// });
// User.belongsToMany(User, {
//   as: "partner",
//   foreignKey: "id",
//   through: User,
// });
//this is a base, might need to be reworked depending on seed data
module.exports = {
  User,
  Instrument,
  Post,
  Genre,
};
