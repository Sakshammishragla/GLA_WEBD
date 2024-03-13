const express=require("express")
const Blog = require("../model/Blog")
const { v4: uuidv4 } = require('uuid');
const router=express.Router()


router.get("/getblogs",async(req,res)=>{
    let blogs= await Blog.find()
    res.render("blogpage",{
        blogs:blogs
    })
})


router.post("/addblog",async(req,res)=>{
    console.log(req.body);
    const {name,Class,blog}=req.body

    const obj={
        name:name,
        Class:Class,
        blog:blog,
        blogId:uuidv4()
    }
     
    await Blog.create(obj)

   res.redirect("/getblogs")
})


router.get("/delete/:blogId",async(req,res)=>{
    console.log(req.params);
    let blogId=req.params.blogId
   await Blog.deleteOne({blogId})
    res.redirect("/getblogs")
})

router.get("/update/:blogId",async(req,res)=>{
    let blogId=req.params.blogId
   let updateBlog= await Blog.findOne({blogId})

    res.render("updateblog",{
        updateBlog
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