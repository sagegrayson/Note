const router = require("express").Router();
const { Post } = require("../../models");
//creates new post

// The  '/api' endpoint.

// api/post
router.post("/post", async (req, res) => {
  try {
    const userData = await Post.create({
      Post_text: req.body.post,
      user_id: req.body.user,
      genre_id: req.body.genre,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
