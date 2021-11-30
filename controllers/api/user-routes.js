const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth.js");

//The '/api/users' endpoint

//api/users/all - gets all users as json
router.get("/all", async (req, res) => {
  try {
    const dbPostData = await User.findAll();

    const user = dbPostData.map((user) => user.get({ plain: true }));

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;

//api/users/create - creates a new user in database
router.post("/create", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
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
//api/users/id - gets a user based on id entered
router.get("/:id", withAuth, async (req, res) => {
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
//api/users/login - logs in user if correct information entered
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!userData) {
      res.status(400).json({ message: "Incorrect Email or Password" });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//api/users/logout - logs out a user
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
