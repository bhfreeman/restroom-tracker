const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Bathroom, Review, Comment, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    // Get all bathrooms, sorted by location
    const bathroomData = await Bathroom.findAll({});
    // Serialize user data so templates can read it
    // const users = userData.map((project) => project.get({ plain: true }));
    res.status(200).json(bathroomData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bathroomData = await Bathroom.findByPk(req.params.id, {
      include: {
        model: Review,
        attributes: ["title", "review_text", "createdAt", "user_id"],
        include: [
          {
            model: Comment,
            include: { model: User, attributes: ["name", "email"] },
          },
          { model: User, attributes: ["name", "email"] },
        ],
      },
      order: [
        ["city", "ASC"],
        ["zipcode", "ASC"],
      ],
    });

    res.status(200).json(bathroomData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const bathroomData = await Bathroom.create(req.body);
    res.status(200).json(bathroomData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const bathroomData = await Bathroom.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!bathroomData) {
      res.status(404).json({ message: "No bathroom found with that ID!" });
      return;
    }
    res.status(200).json(bathroomData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
