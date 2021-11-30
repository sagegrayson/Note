const { Post } = require("../models");
// genre_id: 1 is Rock
// genre_id: 2 is Rap
// genre_id: 3 is Country
// genre_id: 4 is Folk
// genre_id: 5 is Pop

// Users: 1 - James, 2 - Sage, 3 - Chris, 4 - Ami
const postData = [
  // Rock seeds
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
    post_text: "Brian May's guitar skills make me feel some typa way",
    genre_id: 1,
    user_id: 3,
  },
  {
    post_text: "Roger Taylor is such a beast",
    genre_id: 1,
    user_id: 2,
  },
  {
    post_text:
      "Don't Stop Me Now makes me wish my car could activate hyperdrive",
    genre_id: 1,
    user_id: 4,
  },
  // Rap Seeds
  {
    post_text: "Mac Miller was so sick",
    genre_id: 2,
    user_id: 2,
  },
  {
    post_text: "J.I.D's flow is soooo nice",
    genre_id: 2,
    user_id: 4,
  },
  {
    post_text: "Yo DaBaby's kinda wilding rn",
    genre_id: 2,
    user_id: 3,
  },
  {
    post_text: "Jaden is kinda slept on",
    genre_id: 2,
    user_id: 1,
  },
  {
    post_text: "Give me 2013 Chance back 😞",
    genre_id: 2,
    user_id: 2,
  },
  // Country Seeds
  {
    post_text: "Lil Nas X literally never misses",
    genre_id: 3,
    user_id: 3,
  },
  {
    post_text: "Lil Nas X is not country 😠",
    genre_id: 3,
    user_id: 1,
  },
  {
    post_text: "Love Blake Shelton on the Voice #mycoach",
    genre_id: 3,
    user_id: 2,
  },
  {
    post_text: "John Denver's nice with it",
    genre_id: 3,
    user_id: 4,
  },
  {
    post_text: "Johnny Cash is my favorite artist :)",
    genre_id: 3,
    user_id: 3,
  },
  // {
  //   post_text: "Where's my truck songs at?",
  //   genre_id: 3,
  //   user_id: 3,
  // },
  // {
  //   post_text:
  //     "I gotta work on a truck but I always find time for these greats",
  //   genre_id: 3,
  //   user_id: 4,
  // },
  // {
  //   post_text: "Hank Williams was everything",
  //   genre_id: 3,
  //   user_id: 1,
  // },
  // {
  //   post_text: "I'm all fired up for this!",
  //   genre_id: 3,
  //   user_id: 2,
  // },

  // Folk Seeds
  {
    post_text: "John Prine was such a legend :(",
    genre_id: 4,
    user_id: 3,
  },
  {
    post_text: "Woody Guthrie is telling the truth!",
    genre_id: 4,
    user_id: 1,
  },
  {
    post_text: "Bob Dylan's better man",
    genre_id: 4,
    user_id: 2,
  },
  {
    post_text: "Pete Seeger is the OG",
    genre_id: 4,
    user_id: 3,
  },
  {
    post_text: "Folk will never die",
    genre_id: 4,
    user_id: 4,
  },
  // Pop Seeds
  {
    post_text: "Doja Cat is so crazy but ngl, her music goes off pretty hard",
    genre_id: 5,
    user_id: 4,
  },
  {
    post_text: "Adele's recent performance was so beautiful 😭",
    genre_id: 5,
    user_id: 1,
  },
  {
    post_text: "Billie Eilish? More like Billie Eyelash. She's so overhyped.",
    genre_id: 5,
    user_id: 2,
  },
  {
    post_text: "Bruno Mars is so talented",
    genre_id: 5,
    user_id: 3,
  },
  {
    post_text: "The Weeknd's voice is so smooth",
    genre_id: 5,
    user_id: 4,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
