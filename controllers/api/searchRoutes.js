const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Bathroom, Review, Comment, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    // Get all bathrooms, sorted by location
    const bathroomData = await Bathroom.findAll({});
    // Serialize user data so templates can read it
    const bathrooms = bathroomData.map((bathroom) => bathroom.get({plain: true}))
    res.render('search-results', {bathrooms, logged_in: req.session.logged_in})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create", async (req, res) => {
  try {
    res.render('bathroom-create', {
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bathroomData = await Bathroom.findByPk(req.params.id, {
      // include: [{all: true, nested: true, raw: true}],
      include: {
        model: Review,
        raw: true,
        attributes: ["id", "title", "review_text", "createdAt", "user_id"],
        include: [
          {
            model: Comment,
            include: { model: User, attributes: ["name", "email"] },
            raw: true,
          },
          { model: User, attributes: ["name", "email"], raw: true },
        ],
      },
    });

    
    const bathroom = bathroomData.get({ plain: true });
    // console.log('--------')
    // console.log('--------')
    // console.log('--------')
    // console.log('--------')
    // console.log(bathroom)
    // console.log('--------')
    // console.log('--------')
    // console.log('--------')
    res.render("bathroom", {bathroom, logged_in: req.session.logged_in});
    // res.status(200).json(bathroomData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create bathroom
router.post("/create", async (req, res) => {
  try {
    console.log('--------')
    console.log('--------')
    console.log('--------')
    console.log('--------')
    console.log(req.body)
    console.log('--------')
    console.log('--------')
    console.log('--------')
    await Bathroom.create({
      business_name: req.body.business_name,
      street_address: req.body.street_address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      location_type: req.body.location_type,
      number_stalls: parseInt(req.body.number_stalls),
      ada_compliant: req.body.ada_compliant,
      overall_rating: Math.floor(Math.random() * 5)
    });
    res.redirect('/api/search')
  } catch (err) {
    res.status(400).json(err);
  }
});
// delete a bathroom
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
