const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

console.log(process.env.DATABASE, '<-- here is the database')

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