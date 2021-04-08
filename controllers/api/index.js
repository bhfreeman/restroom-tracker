const router = require('express').Router();

// const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const searchRoutes = require('./searchRoutes');
const userRoutes = require('./userRoutes');

// router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/search', searchRoutes);
router.use('/user', userRoutes);

module.exports = router;