const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
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
const { auth } = require('./Middleware/auth')
const { admin } = require('./Middleware/admin')

//===============================
//            POSTS
// ==============================

//create a post
app.post('/api/articles/new',auth, admin,(req, res)=>{

    // this is instantiating a class
    const article = new Article(req.body)
    // I need to come back to this at some point - need a break
    // look at .populate() here for the user -- had some good docs at the link below
    // https://mongoosejs.com/docs/populate.html
    // console.log(user)
    console.log(article)
    article.save((err, doc) => {
        if (err) return res.json({success: false, err})
        res.status(200).json({
            success: true,
            info: doc
        })
        console.log(article)
    })
})

// get all posts
app.get('/api/articles/show', (req,res)=>{
    Article.find({}, (err, article)=>{
        if (err) return res.status(400).send(err)
        res.status(200).send(article)
    }).sort({$natural: -1})
})

// get the most recent article for the home page. this is tight

app.get('/api/articles/showMostRecent', (req,res)=> {
    Article.findOne({}, (err, article)=>{
        if (err) return res.status(400).send(err)
        res.status(200).send(article)
    }).sort({$natural: -1});
});

// get an article by its id /api/articles/show_by_id
app.get('/api/articles/show_by_id', (req,res)=>{
    // let type = req.query.type;
    let items = req.query.id;

    Article.find({'_id':{$in:items}}).
    populate('user').
    exec((err, docs) =>{
        return res.status(200).send(docs)
    })
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
        articles: req.user.article
        // comment: req.user.comments
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

if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.use(express.static('client/brogblog/build'))

    app.get('/*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, '/client/brogblog', 'build', 'index.html'))
    })
}

// /client/brogblog/build/js', 'index.html'

const PORT = process.env.PORT || 3002;

app.listen(process.env.PORT || 3002, ()=> {
    console.log(`heyaaa I am listening, a ha haaa ${PORT}`)
})