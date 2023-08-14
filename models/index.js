const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Selection = require('./Selection');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

Selection.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment, Selection };
