const express = require('express')
const app = express()
const path = require('path')
const PORT = 4444
const hbs = require("hbs")
const mongoose = require("mongoose")
const session = require("express-session")
const flash = require('connect-flash');
const passport=require("passport")
const User =require("./model/User")

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser=req.user
    res.locals.success = req.flash('success')
    res.locals.error = req.flash("error")
    next()
})

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use("/", require("./routes/product"))
app.use("/", require("./routes/review"))
app.use("/",require("./routes/auth"))
app.use("/",require("./routes/api"))
app.use("/",require("./routes/cart"))

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce_secS')
    .then(() => {
        app.listen(PORT, () => {
            console.log('http://localhost:' + PORT)
        })
    })
