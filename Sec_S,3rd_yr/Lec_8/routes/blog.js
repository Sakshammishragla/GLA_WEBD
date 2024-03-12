const express=require("express")
const Blog = require("../model/Blog")
const router=express.Router()

router.post("/addblog", async (req, res) => {
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
  
  
  
  router.get("/getblog", async (req, res) => {
    let blogs = await Blog.find()
    res.render("blogpage", {
      blogs: blogs
    })
  })
  
  router.get("/delete/:blogId", async (req, res) => {
    let blogId = req.params.blogId
    await Blog.deleteOne({ blogId })
    // console.log(req.params);
    // blogs = blogs.filter((item) => item.blogId != req.params.blogId)
    res.redirect("/getblog")
  })
  
  router.get("/update/:blogId", async (req, res) => {
    let blogId = req.params.blogId
    let updateblog = await Blog.findOne({ blogId })
    // const updateblog = blogs.filter((item) => item.blogId == req.params.blogId)
    // console.log(updateblog);
    res.render("updateblog", {
      updateblog
    })
  })
  
  router.post("/updateblog",async (req, res) => {
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

  module.exports=router