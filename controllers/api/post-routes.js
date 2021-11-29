const router = require("express").Router();
const { Post, Genre, User } = require("../../models");
const withAuth = require("../../utils/auth.js");

//api/posts/create
router.post("/create", async (req, res) => {
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
//api/posts/genre_id
router.get("/genre/:genre_id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.genre_id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        { model: Genre, attributes: ["name"] },
      ],
    });
    const post = dbPostData.get({ plain: true });

    //res.json(posts);
    res.render("genre", {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//api/posts/all
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
