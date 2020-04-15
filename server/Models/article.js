const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
        maxlength: 100
    },
    body: {
        required: true,
        type: String,
        maxlength: 2500
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    }
}, {timestamps: true})

const Article = mongoose.model('Article', articleSchema);

module.exports = { Article }