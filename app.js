const express = require("express");
// const ejs = require("ejs");
const bodyParser = require("body-parser");
// const path = require('path')
const mongoose = require("mongoose");

const app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/regMangDB', {useNewUrlParser: true})

const userSchema = new mongoose.Schema({name: String, pass: String});
const User = new mongoose.model('User', userSchema);


app.get(['/', '/home'], (req, res) => {
    res.render('logsignup', {regOrSign: 'Register', imgSrc: 'register.png'}) //Sign in | login.svg
    // res.render('home')
});
app.post(['/', '/home'], (req, res) =>{

    // newRegister(User, req.body.username, req.body.password).then()
    const newUser = new User({
        name: req.body.username,
        pass: req.body.password
    });
    newUser.save(function(err){
        if(err){
            console.log("Something wrong happend, try again" + err);
        } else {
            res.render('home')
        }
    });
    console.log( );

});


app.get('/register', (req, res) => {
    res.render('logsignup', {regOrSign: 'Register', imgSrc: 'register.png'})
})








app.get('/add', (req, res) => {
    res.render('add')
    //TODO: check the session status first
})

app.get('/review', (req, res) => {
    res.render('review')
    //TODO: check the session status first
})

app.get('/search', (req, res) => {
    res.render('search')
    //TODO: check the session status first
})




app.listen(3000, () => console.log("Server started on port 3000"));

const newRegister = function(userCollection, name, pass) {
    //
}