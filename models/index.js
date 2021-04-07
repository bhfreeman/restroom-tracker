// require individual model files here
const Bathroom = require('./bathroom')
const Comment = require('./comments')
const Review = require('./reviews')
const User = require('./user')

// set associations
Bathroom.hasMany(Review,{
    foreignKey: 'bathroom_id',
    onDelete: 'CASCADE'
})

Review.belongsTo(Bathroom, {
    foreignKey: 'bathroom_id'
})

User.hasMany(Review,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Review.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Review.hasMany(Comment, {
    foreignKey: 'review_id'
})

Comment.belongsTo(Review, {
    foreignKey: 'review_id'
})


// export models
module.exports = { Bathroom, Comment, Review, User};