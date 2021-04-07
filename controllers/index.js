const router = require('express').Router();

// Require route files/folders here
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// router.use routes here
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;