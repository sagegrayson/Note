const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const genreRoutes = require("./genre-routes");
//api/users
router.use("/users", userRoutes);
//api/posts
router.use("/posts", postRoutes);
//api/genres
router.use("/genres", genreRoutes);

module.exports = router;
