const express = require("express")
const app = express()
const PORT = 4444;
const path = require("path")
const hbs = require('hbs');


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


let blogs=[]

app.get("/getblogs",(req,res)=>{
    res.render('blogpage',{
        blogs
    })
})

app.post("/addblog",(req,res)=>{
    const {name,Class,blog}=req.body

    const obj={
        name,
        Class,
        blog
    }
   console.log(req.body);
    blogs.push(obj)
    res.redirect("/getblogs")
})


app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})