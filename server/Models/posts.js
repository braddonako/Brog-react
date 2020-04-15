const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
    
})

const Post = mongoose.model('Post', commentSchema);

module.exports = { Post }