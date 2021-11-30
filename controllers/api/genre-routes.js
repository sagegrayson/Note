const router = require("express").Router();
const { Genre } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const dbPostData = await Genre.findAll();

    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
