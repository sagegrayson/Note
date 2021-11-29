const router = require("express").Router();
const { User, Instrument, Post, Genre } = require("../models");
//Post, Instrument, Genre
const withAuth = require("../utils/auth.js");
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
//withAuth

// router.get("/genre/:id", async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   // If the user is logged in, allow them to view the genre
//   try {
//     const dbGenreData = await Genre.findByPk(req.params.id, {
//       include: [
//         {
//           model: Post,
//           attributes: ["post_text", "user_id"],
//         },
//       ],
//     });
//     const genre = dbGenreData.get({ plain: true });
//     //res.json(genre);
//     res.render("genre", {
//       genre,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
module.exports = router;
