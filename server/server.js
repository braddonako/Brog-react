const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser());

////////////
// MODELS //
////////////

app.get('/somedata', (req, res) => {
    res.send('a haaaa ')
});

// const port = process.env.PORT || 3000;

app.listen(3000, ()=> {
    console.log('heyaaa I am listening, a ha haaa')
})