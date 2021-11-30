const { Post } = require("../models");
// genre_id: 1 is Rock
// genre_id: 2 is Rap
// genre_id: 3 is Country
// genre_id: 4 is Folk
// genre_id: 5 is Pop
const postData = [
  {
    post_text: "I love rock!",
    genre_id: 1,
    user_id: 1,
  },
  {
    post_text: "Freddie Mercury is the GOAT",
    genre_id: 1,
    user_id: 4,
  },
  {
    post_text: "Mac Miller was so sick #ripskinnylegend",
    genre_id: 2,
    user_id: 2,
  },
  {
    post_text: "Lil Nas X literally never misses",
    genre_id: 3,
    user_id: 3,
  },
  {
    post_text: "John Prine was such a legend :(",
    genre_id: 4,
    user_id: 3,
  },
  {
    post_text: "Doja Cat is so crazy but ngl, her music goes off so hard",
    genre_id: 5,
    user_id: 4,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
