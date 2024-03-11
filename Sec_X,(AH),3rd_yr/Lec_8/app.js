const express = require("express")
const app = express()
const PORT = 4444;
const path=require("path")
const hbs=require("hbs")
const mongoose = require('mongoose')


app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use("/",require("./router/blog"))



mongoose.connect('mongodb://127.0.0.1:27017/BlogPage')
.then(()=>{
    app.listen(PORT,()=>{
        console.log("http://localhost:"+PORT);
    })
})