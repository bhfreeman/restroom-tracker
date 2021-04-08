const router = require('express').Router();

// const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const searchRoutes = require('./searchRoutes');

// router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/search', searchRoutes);

module.exports = router;