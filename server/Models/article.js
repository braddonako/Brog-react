const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = mongoose.Schema({
    user:{
        type: Schema.ObjectId, ref: 'User'
    },
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

const Article = mongoose.model('Article', articleSchema);

module.exports = { Article }