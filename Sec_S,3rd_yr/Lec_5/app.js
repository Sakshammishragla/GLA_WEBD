const express = require("express")
const app = express()
const path = require("path")
const PORT = 4444;
const hbs=require("hbs")
const { v4: uuidv4 } = require('uuid');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

let blogs=[]

app.post("/addblog",(req,res)=>{
    // console.log(req.body);
    const {name,Class,blog}=req.body
    const obj={
        name:name,
        Class:Class,
        blog:blog,
        blogId:uuidv4()
    }
   console.log(obj);
    blogs.push(obj)
    // res.send(blogs)
    res.redirect('/getblog')
})

blogs.map((item)=>)

app.get("/getblog",(req,res)=>{
    res.render("blogpage",{
        blogs:blogs
    })
})

app.get("/delete/:blogId",(req,res)=>{
    // console.log(req.params);
    blogs=blogs.filter((item)=>item.blogId!=req.params.blogId)
    res.redirect("/getblog")
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})