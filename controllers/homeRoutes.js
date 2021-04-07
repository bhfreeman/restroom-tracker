const router = require('express').Router();
const { Bathroom, User, Review, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all bathroom and join with reviews data
router.get('/bathroom/:id', async (req, res) => {
  try {
    const bathroomData = await Bathroom.findAll({
      include: [
        {
          model: Review,
          attributes: ['title'],
          //length of review displayed?
        },
      ],
    });

    // Serialize data so the template can read it
    const bathrooms = bathroomData.map((bathroom) => bathroom.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      bathrooms, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//get reviews
router.get('/reviews/:id', async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const reviews = reviewData.get({ plain: true });

    res.render('project', {
      ...reviews,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Reviews }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;