const express=require("express")
const Blog = require("../model/Blog")
const router=express.Router()
const { v4: uuidv4 } = require('uuid');

router.get("/getblog",async(req,res)=>{
    let blogs=await Blog.find()
    res.render("blogpage",{
        blogs
    })
})
router.post("/addblog", async(req, res) => {
    console.log(req.body);
    const {name,Class,blog}=req.body
    const obj={
       name,
       Class,
       blog,
       blogId:uuidv4()
    }
    await Blog.create(obj)
    res.redirect("/getblog")
})


router.get("/delete/:blogId",async(req,res)=>{
    let blogId=req.params.blogId
    await Blog.deleteOne({blogId})
    res.redirect("/getblog")
})

router.get("/update/:blogId",async(req,res)=>{
    let blogId=req.params.blogId
    const updateblog=await Blog.findOne({blogId})
    
    res.render("updateblog",{
        updateblog:updateblog
    })
})

router.post("/updateblog",async(req,res)=>{
    const {name,Class,blog,blogId}=req.body
    const newObj={
        name,
        Class,
        blog,
        blogId
    }
    
    await Blog.updateOne({blogId},newObj)

    res.redirect("/getblog")
})

module.exports=router