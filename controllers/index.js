const router = require('express').Router();

// Require route files/folders here
const apiRoutes = require('./api');

// router.use routes here
router.use('/api', apiRoutes);


module.exports = router;