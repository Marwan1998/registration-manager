const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require('path')


const app = express();


app.use(express.static('public'))


app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));


app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/add', (req, res) => {
    res.render('add')
})

app.get('/logsignup', (req, res) => {
    res.render('logsignup')
})

app.get('/review', (req, res) => {
    res.render('review')
})

app.get('/search', (req, res) => {
    res.render('search')
})




app.listen(3000, () => console.log("Server started on port 3000"));