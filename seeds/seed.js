const sequelize = require('../config/connection');
const {  } = require('../models');

// require individual seeds files


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
// bulk create from required seeds files


  process.exit(0)
};

seedDatabase();
