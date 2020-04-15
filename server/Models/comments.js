const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    
})

const Comment = mongoose.model('Comment', commentSchema);
 
module.exports = { Comment }