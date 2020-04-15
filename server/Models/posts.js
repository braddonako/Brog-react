const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
        maxlength: 100
    },
    body: {
        required: true,
        type: String,
        maxlength: 2500
    }
}, {timestamps: true})

const Post = mongoose.model('Post', postSchema);

module.exports = { Post }