const express=require("express")
const User = require("../model/User")
const router =express.Router()

router.get("/signup",(req,res)=>{
    res.render("auth/signup")
})

router.post("/signup",async(req,res)=>{
    const {username,password,email}=req.body
    let newUser =new User({username,email,password})
  let user= await User.register(newUser,password)
  res.send(user)
})

router.get("/login",(req,res)=>{
    res.render("auth/login")
})

module.exports=router