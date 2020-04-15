const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// console.log(process.env.DATABASE, '<-- here is the database ahaha')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

////////////
// MODELS //
////////////

const { User } = require('./Models/user')

// Middlewares
const {auth} = require('./Middleware/auth')


// ------------ //
   // USERS //
// ------------ //
app.get('/api/users/auth',auth,(req, res)=>{
    res.status(200).json({
        user: req.user
    })
})


// create an account info
app.post('/api/users/register', (req,res)=>{
    const user = new User(req.body);
    
    user.save((err,doc) => {
        if(err) return res.json({success: false,err});
        res.status(200).json({
            success: true,
            userdata: doc
        })
    })
})

//login info
app.post('/api/users/login', (req, res)=>{
    // first I want to search for the email
        User.findOne({'email': req.body.email}, (err, user)=>{
            if(!user) return res.json({loginSuccess: false, message: 'Email not found.'});

        // then will check is the password is the same for the user
        user.comparePassword(req.body.password, (err, isMatch)=>{
            if (!isMatch) return res.json({loginSuccess: false, message: 'Your password is incorrect'});

        // going to create the token to the user 
        user.generateToken((err, user) => {
            if (err) return res.status(400).send(err);
            res.cookie('x_auth', user.token).status(200).json({loginSuccess: true})
        })  
        })
    })
});

const port = process.env.PORT || 3000;

app.listen(3000, ()=> {
    console.log(`heyaaa I am listening, a ha haaa ${port}`)
})