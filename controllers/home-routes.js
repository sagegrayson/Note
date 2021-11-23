const router = require("express").Router();
const { User, Post, Instrument, Genre } = require("../models");
// TODO: Import the custom middleware
const withAuth = require("../utils/auth.js");
// Route will use "/"
router.get("/", async (req, res) => {
  res.send("this will be the homepage route");
  //   try {
  //     res.render("homepage", {
  //       loggedIn: req.session.loggedIn,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
});
// Route will use "/"
router.get("/genre/:id", withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // If the user is logged in, allow them to view the gallery
  try {
    res.send("This will take you to a genre group page");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Route will use "/"
router.get("/user/:id", withAuth, async (req, res) => {
  try {
    res.send("This will take you to a users page");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
