const sequelize = require("../config/connection");
const { User, Comment, Post, Selection } = require("../models");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedDatabase();
