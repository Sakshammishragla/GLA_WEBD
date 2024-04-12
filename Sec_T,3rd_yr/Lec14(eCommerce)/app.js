const express = require('express')
const app = express()
const path = require('path')
const PORT = 4444
const hbs = require("hbs")
const mongoose = require("mongoose")
const flash = require('connect-flash');
const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(flash())

app.use((req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})

app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
hbs.registerPartials(__dirname + '/views/partials', function (err) { })
app.use(express.static(path.join(__dirname, "public")))
app.use("/", require("./routes/product"))
app.use("/", require("./routes/review"))

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce_secT')
    .then(() => {
        app.listen(PORT, () => {
            console.log('http://localhost:' + PORT)
        })
    })
