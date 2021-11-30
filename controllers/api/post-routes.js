const router = require("express").Router();
const { Post, Genre, User } = require("../../models");
const withAuth = require("../../utils/auth.js");

//The '/api/posts' endpoint
//Includes a get route for all posts

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
