const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const SALT_I = 10; // We are salting the password

// require('dotenv').config()

const userSchema  = mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        required: true,
        minlength: 5
    },
    name:{
        type: String,
        required: true,
        maxlength: 100
    },
    lastname:{
        type: String,
        required: true,
        maxlength: 100
    },
    comments:{
        type: Array,
        default:[],
    },
    role:{
        type:Number,
        default: 0
    },
    token:{
        type: String
    }
})

// telling the server to hash the password before data is sent
userSchema.pre()

const User = mongoose.model('User', userSchema)

module.exports = { User }