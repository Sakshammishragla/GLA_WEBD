const express=require("express")
const Blog = require("../model/Blog")
const router=express.Router()
const { v4: uuidv4 } = require('uuid');

router.get("/getblogs",async(req,res)=>{
    let blogs= await Blog.find({})
      res.render('blogpage',{
          blogs
      })
  })
  
  router.post("/addblog",async(req,res)=>{
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
  
  router.get("/delete/:blogId",async(req,res)=>{
       let blogid=req.params.blogId
      await Blog.deleteOne({blogId:blogid})
      res.redirect("/getblogs")
  })
  
  router.get("/update/:blogId",async(req,res)=>{
      let blogId=req.params.blogId
     let updateBlog= await Blog.findOne({blogId})
     console.log(updateBlog);
      res.render("updateblog",{
          updateBlog:updateBlog
      })
  })
  
  router.post("/updateblog",async(req,res)=>{
      // console.log(req.body);
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

  module.exports=router