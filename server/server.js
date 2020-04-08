const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/brog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser());

////////////
// MODELS //
////////////

// USERS

app.get('/api/users/register', (req,res)=>{
    res.status(200)
})

app.get('/somedata', (req, res) => {
    res.send('a haaaa ')
});

const port = process.env.PORT || 3000;

app.listen(3000, ()=> {
    console.log(`heyaaa I am listening, a ha haaa ${port}`)
})