const sequelize = require('../config/connection');
const { Bathroom, Comment, Review, User } = require('../models');

// require individual seeds files
const seedBathroom = require('./bathroomData.json');
const seedComment = require('./commentData.json');
const seedReview = require('./reviewData.json');
const seedUser = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
// bulk create from required seeds files
  const bathrooms = await Bathroom.bulkCreate(seedBathroom, {
    individualHooks: true,
    returning: true,
  });

  const users = await User.bulkCreate(seedUser, {
  individualHooks: true,
  returning: true,
});

  const reviews = await Review.bulkCreate(seedReview, {
  individualHooks: true,
  returning: true,
});

  const comments = await Comment.bulkCreate(seedComment, {
  individualHooks: true,
  returning: true,
});

  process.exit(0)
};

seedDatabase();
