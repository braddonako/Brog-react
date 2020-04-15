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

//===============================
//           MODELS
// ==============================

const { User } = require('./Models/user');
const { Article } = require('./Models/article');

//===============================
//              MIDDLEWARES
// ==============================
const {auth} = require('./Middleware/auth')
const { admin } = require('./Middleware/admin')

//===============================
//            POSTS
// ==============================

//create a post
app.post('/api/articles/new',auth, admin,(req, res)=>{
    const article = new Article(req.body);
    article.save((err, doc) => {
        if (err) return res.json({success: false, err})
        res.status(200).json({
            success: true,
            article: doc
        })
    })
})

// get all posts
app.get('/api/articles/show', (req,res)=>{
    Article.find({}, (err, article)=>{
        if (err) return res.status(400).send(err)
        res.status(200).send(article)
    })
})

// get an article by its id
app.get('/api/articles/show_by_id', (req,res)=>{
    let type = req.query.type;
    let items = req.query.id;

    if (type === "array"){
        let ids = req.query.id.split(',');
        
    }
})




//===============================
//         USER ROUTES
// ==============================
app.get('/api/users/auth',auth,(req, res)=>{
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        articles: req.user.article,
        comment: req.user.comments
    })
})


// Route to register a new user
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

//login route -- checking if password and email are in the DB
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

// simple logout route. Grabbing user by their id, if they have a tokem, we delete the token
app.get('/api/users/logout', auth, (req,res)=>{
    User.findOneAndUpdate(
    {_id: req.user._id}, 
    {token: ''},
    (err, doc) => {
        if (err) return res.json({success: false, err})
        return res.status(200).send({
            success: true
        })
    }
    )
})

const port = process.env.PORT || 3000;

app.listen(3000, ()=> {
    console.log(`heyaaa I am listening, a ha haaa ${port}`)
})