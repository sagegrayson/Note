const router = require("express").Router();
const { User, Instrument, Post, Genre } = require("../models");
const withAuth = require("../utils/auth.js");

// The '/' endpoint - brings you to landing page
router.get("/", async (req, res) => {
  try {
    res.render("landing", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//login - brings you to login page
router.get("/login", async (req, res) => {
  try {
    res.render("login", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//create - brings you to create page
router.get("/create", async (req, res) => {
  try {
    res.render("create", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//homepage - brings you to home page
router.get("/home", withAuth, async (req, res) => {
  try {
    res.render("home", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//home/genre_id - brings the homepage with genre loaded and all posts attached
router.get("/home/:genre_id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: { genre_id: req.params.genre_id },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        { model: Genre, attributes: ["name"] },
      ],
    });

    const post = dbPostData.map((post) => post.get({ plain: true }));
    res.render("home", {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//renders addpost page
router.get("/post", withAuth, async (req, res) => {
  res.render("postpage", {
    loggedIn: req.session.loggedIn,
  });
});
module.exports = router;
