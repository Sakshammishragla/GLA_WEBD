const express = require("express")
const app = express()
const PORT = 4444;
const path=require("path")
const hbs=require("hbs")
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')

let blogs=[]
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
const { Schema } = mongoose;

const blogSchema=new Schema({
    name:String,
    Class:String,
    blog:String,
    blogId:String
})


const Blog = mongoose.model('Blog', blogSchema);

app.get("/getblogs",async(req,res)=>{
   let blogs=await Blog.find()
    res.render('blogpage',{
     blogs   
    })
})

app.post("/addblog",async(req,res)=>{
    const {name,Class,blog}=req.body
    const obj={
        name,
        Class,
        blog,
        blogId:uuidv4()
    }
    await Blog.create(obj)
    res.redirect("/getblogs")
})

app.get("/delete/:blogId",async(req,res)=>{
    let blogId=req.params.blogId
    await Blog.deleteOne({blogId})
    res.redirect("/getblogs")
})

app.get("/update/:blogId",async(req,res)=>{
    let blogId=req.params.blogId
    const updateblog=await Blog.findOne({blogId})
    
    res.render("updateblog",{
        updateblog:updateblog
    })
})



app.post("/updateblog",async(req,res)=>{
    const {name,Class,blog,blogId}=req.body
    const newObj={
        name,
        Class,
        blog,
        blogId
    }
   
    await Blog.updateOne({blogId},newObj)

    res.redirect("/getblogs")
})

mongoose.connect('mongodb://127.0.0.1:27017/BlogPage')
.then(()=>{
    app.listen(PORT,()=>{
        console.log("http://localhost:"+PORT);
    })
})