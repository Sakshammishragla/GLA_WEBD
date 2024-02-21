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

let blogs = []
const { Schema } = mongoose;

app.post("/addblog", (req, res) => {
  // console.log(req.body);
  const { name, Class, blog } = req.body
  const obj = {
    name: name,
    Class: Class,
    blog: blog,
    blogId: uuidv4()
  }
  console.log(obj);
  blogs.push(obj)
  // res.send(blogs)
  res.redirect('/getblog')
})



app.get("/getblog", (req, res) => {
  res.render("blogpage", {
    blogs: blogs
  })
})

app.get("/delete/:blogId", (req, res) => {
  // console.log(req.params);
  blogs = blogs.filter((item) => item.blogId != req.params.blogId)
  res.redirect("/getblog")
})

app.get("/update/:blogId", (req, res) => {
  const updateblog = blogs.filter((item) => item.blogId == req.params.blogId)
  console.log(updateblog);
  res.render("updateblog", {
    updateblog: updateblog[0]
  })
})

app.post("/updateblog", (req, res) => {
  const { name, Class, blog, blogId } = req.body
  const newObj = {
    name,
    Class,
    blog,
    blogId
  }

  blogs = blogs.map((item) => {
    if (item.blogId == blogId) {
      return newObj
    }
    return item
  })

  res.redirect("/getblog")
})

mongoose.connect('mongodb://127.0.0.1:27017/BlogPage')
.then(()=>{
  app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
  })
})