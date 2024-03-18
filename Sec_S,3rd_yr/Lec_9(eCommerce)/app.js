const express = require('express')
const app = express()
const path = require('path')
const PORT = 4444
const hbs = require("hbs")
const mongoose=require("mongoose")


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });
app.use("/", require("./routes/product"))
app.use(express.static(path.join(__dirname,'public')))

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce_secS')
    .then(() => {
        app.listen(PORT, () => {
            console.log('http://localhost:' + PORT)
        })
    })
