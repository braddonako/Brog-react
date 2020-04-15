const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    
})

const Post = mongoose.model('Post', commentSchema);

module.exports = { Post }