const sequelize = require("../config/connection");
const { User, Comment, Post, Selection } = require("../models");
const userData = require('./userData.json');
const draftData = require('./draft.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  for (const selection of draftData){ 
    await Selection.create({
      ...selection,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};





seedDatabase();
