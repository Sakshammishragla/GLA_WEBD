const express = require("express")
const app = express()
const PORT = 4444;
const path = require("path")
const hbs = require('hbs');
const { v4: uuidv4 } = require('uuid');


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
        blog,
        blogId:uuidv4()
    }
    // console.log(obj);
//    console.log(req.body);
    blogs.push(obj)
    res.redirect("/getblogs")
})

app.get("/delete/:blogId",(req,res)=>{
    // console.log(req.params);
    blogs=blogs.filter((item)=>item.blogId!=req.params.blogId)
    res.redirect("/getblogs")
})

app.get("/update/:blogId",(req,res)=>{
    // console.log(req.params);
    const updateBlog=blogs.filter((item)=>item.blogId==req.params.blogId)
    res.render("updateblog",{
        updateBlog:updateBlog[0]
    })
})

app.post("/updateblog",(req,res)=>{
    // console.log(req.body);
    const {name,Class,blog,blogId}=req.body
    const newObj={
       name,
       Class,
       blog,
       blogId
    }

    blogs=blogs.map((item)=>{
        if(item.blogId==blogId){
            return newObj
        }
        return item
    })
    
    res.redirect("/getblogs")
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})