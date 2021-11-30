const { Post } = require("../models");

const postData = [
  {
    post_text: "I love rock!",
    genre_id: 1,
    user_id: 1,
  },
  {
    post_text: "I love Rap",
    genre_id: 2,
    user_id: 2,
  },
  {
    post_text: "I love Country",
    genre_id: 3,
    user_id: 3,
  },
  {
    post_text: "I love Folk",
    genre_id: 4,
    user_id: 4,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
