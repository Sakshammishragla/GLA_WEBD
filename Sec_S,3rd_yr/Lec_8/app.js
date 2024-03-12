const express = require("express")
const app = express()
const path = require("path")
const PORT = 4444;
const hbs = require("hbs")
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use("/",require("./routes/blog"))



mongoose.connect('mongodb://127.0.0.1:27017/BlogPage')
  .then(() => {
    app.listen(PORT, () => {
      console.log("http://localhost:" + PORT);
    })
  })