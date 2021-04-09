const router = require("express").Router();
const { User, Review, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//user dashboard?
router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findOne(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


//get my reviews
router.get('/reviews', withAuth, async (req, res) => {
    try{
      const userData = await User.findByPk({
          attributes: { exclude: ["password"] },
          where: {
            id: req.params.id
          },
          include: 
            {
              model: Review,
              attributes: ['id', 'title', 'post_text', 'created_at']
            },

    });
    res.status(200).json(userData);

    }catch(err){
        res.status(500).json(err);
    }
 
});

//get my comments
router.get('/comments', withAuth, async (req, res) => {
    try{
      const userData = await User.findByPk({
        where: {
          id: req.params.id
        },
        include:
            {
            model: Comment,
                attributes: ["id", "comment_text", "review_id", "timestamps"],
                include: {
                    model: Review,
                    attributes: ['title']
                },
            },

    })
    res.status(200).json(userData);

    }catch(err){
        res.status(500).json(err);
    }
 
});

router.post("/", withAuth, async (req, res) => {
    try {
        const newReview = await Review.create({
            title: req.body.title,
            review_text: req.body.review_text
            // location_type: req.body.location_type,
            // number_stalls: req.body.number_stalls,
            // ada_compliant: req.body.ada_compliant,
            // overall_rating: req.body.overall_rating
        });
    req.session.save(() => {
                req.session.id= newReview.id;
                req.session.logged_in = true;

                res.status(200).json(newReview);
    })
        
    } catch(err){
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;

//get profile info
// router.get('/:id', (req, res) => {
//     try{
//       const userData = await User.findOne({
//         where: {
//           id: req.params.id
//         },
//         include: [
//           {
//             model: Account
//           }
//         ],
//     })
//     }catch(err){
//         res.status(500).json(err);
//     }
 
// });