const router = require("express").Router();
const { Post, Genre, User } = require("../../models");
const withAuth = require("../../utils/auth.js");

//The '/api/posts' endpoint
router.post("/create", async (req, res) => {
  try {
    const postData = await Post.create({
      user_id: req.body.user_id,
      post_text: req.body.post_text,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      //Includes a get route for all posts

      res.status(200).json(postData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//api/posts/all - gets all posts as json
router.get("/all", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        { model: Genre, attributes: ["name"] },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
