const { Post } = require("../models");

const postData = [
  {
    post_text: "I love rock!",
    genre_id: 1,
    user_id: 1,
  },
  {
    post_text: "I love Pop",
    genre_id: 2,
    user_id: 2,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
