const User = require("./User.js");
const Instrument = require("./instrument.js");
const Post = require("./post.js");
const Genre = require("./Genre.js");

Post.belongsTo(User, {
  foreignKey: user_id,
});
User.belongsToMany(Post, { through: Post });
Post.belongsTo(Genre, {
  foreignKey: genre_id,
});

Instrument.belongsToMany(User, {
  through: User,
});

User.belongsToMany(User, { through: User });
//this is a base, might need to be reworked depending on seed data
