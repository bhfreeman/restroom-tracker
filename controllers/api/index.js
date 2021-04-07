const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/search', searchRoutes);

module.exports = router;