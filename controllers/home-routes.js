const router = require("express").Router();
const { User, Instrument, Post, Genre } = require("../models");
//Post, Instrument, Genre
const withAuth = require("../utils/auth.js");
// Route will use "/"
//landingpage
router.get("/", async (req, res) => {
  try {
    res.render("landingpage", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//homepage
router.get("/home", async (req, res) => {
  try {
    res.render("welcomepage", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Route will use "/"
//make an account route/ if not logged in redirect to login page, else show login page
router.get("/genre/:id", withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // If the user is logged in, allow them to view the genre
  try {
    const dbGenreData = await Genre.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: ["post_textcontent"],
        },
      ],
    });

    const genre = dbGenreData.get({ plain: true });

    res.render("genre", {
      genre,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Route will use "/"
router.get("/user/:id", withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id);

    const user = dbUserData.get({ plain: true });

    res.render("userpage", {
      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
module.exports = router;
