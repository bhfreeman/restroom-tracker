const router = require("express").Router();
const { Bathroom, User, Review, Comment } = require("../models");
const withAuth = require("../utils/auth");

// homepage
router.get('/', async (req,res) => {
  try{
    res.render("homepage",
    {logged_in: req.session.logged_in})
  }catch(err){
    res.status(500).json(err);
  }
});

//search all bathrooms, with reviews, ordered
router.get("/bathroom/:city/:state", async (req, res) => {
  try {
    const bathroomData = await Bathroom.findAll({
      where: {
        city: req.params.city,
        state: req.params.state
      },
      include: [
        {
          model: Review,
          // attributes: ["title", "review_text", "timestamps"],
          // order: ["timestamps", "DESC"]
          //length of review displayed?
        },
      ],
    });

    // Serialize data so the template can read it
    const bathrooms = bathroomData.map((bathroom) =>
      bathroom.get({ plain: true })
    );
    // Pass serialized data and session flag into template
    res.render("search-results", {
      bathrooms,
      logged_in: req.session.logged_in,
    });
    // res.send({
    //     bathrooms,
    //     logged_in: req.session.logged_in,
    //   })
  } catch (err) {
    res.status(500).json(err);
  }
});

//
// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Review }],
    });

    const user = userData.get({ plain: true });
    res.render("profile", {
      user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// If the user is already logged in, redirect the request to another route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
