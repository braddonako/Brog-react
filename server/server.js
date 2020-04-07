const express = require('express');
const app = express();

app.get('/somedata', (req, res) => {
    res.send('here is your information')
})

app.listen(3000, ()=> {
    console.log('heyaaa I am listening, a ha haaa')
})