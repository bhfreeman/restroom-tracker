const router = require("express").Router();
const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize")(session.Store);
const { User, Review, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//user dashboard?
router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


//get myreviews
router.get('/reviews', (req, res) => {
    try{
      const userData = await User.findByPk({
        where: {
          id: req.params.id
        },
        include: 
          {
            model: Review,
            attributes: ['id', 'title', 'post_text', 'created_at']
          },

          res.status(200).json(userData),
      });
    }catch(err){
        res.status(500).json(err);
    }
 
});

//get mycomments?
router.get('/comments', (req, res) => {
    try{
      const userData = await Comment.findOne({
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
                }
            }

            res.status(200).json(userData);
    })
    }catch(err){
        res.status(500).json(err);
    }
 
});

// Logout
router.post('/logout', (req, res) => {
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