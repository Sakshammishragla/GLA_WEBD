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

const blogSchema = new Schema({
  name: String,
  Class: String,
  blog: String,
  blogId: String
})

const Blog = mongoose.model('Blog', blogSchema);

app.post("/addblog", async (req, res) => {
  // console.log(req.body);
  const { name, Class, blog } = req.body
  const obj = {
    name: name,
    Class: Class,
    blog: blog,
    blogId: uuidv4()
  }

  await Blog.create(obj)

  res.redirect('/getblog')
})



app.get("/getblog", async (req, res) => {
  let blogs = await Blog.find()
  res.render("blogpage", {
    blogs: blogs
  })
})

app.get("/delete/:blogId", async (req, res) => {
  let blogId = req.params.blogId
  await Blog.deleteOne({ blogId })
  // console.log(req.params);
  // blogs = blogs.filter((item) => item.blogId != req.params.blogId)
  res.redirect("/getblog")
})

app.get("/update/:blogId", async (req, res) => {
  let blogId = req.params.blogId
  let updateblog = await Blog.findOne({ blogId })
  // const updateblog = blogs.filter((item) => item.blogId == req.params.blogId)
  // console.log(updateblog);
  res.render("updateblog", {
    updateblog
  })
})

app.post("/updateblog",async (req, res) => {
  const { name, Class, blog, blogId } = req.body
  const newObj = {
    name,
    Class,
    blog,
    blogId
  }

  await Blog.updateOne({blogId},newObj)
  // blogs = blogs.map((item) => {
  //   if (item.blogId == blogId) {
  //     return newObj
  //   }
  //   return item
  // })

  res.redirect("/getblog")
})

mongoose.connect('mongodb://127.0.0.1:27017/BlogPage')
  .then(() => {
    app.listen(PORT, () => {
      console.log("http://localhost:" + PORT);
    })
  })