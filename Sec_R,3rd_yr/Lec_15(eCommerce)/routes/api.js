const express=require("express")
const User = require("../model/User")
const router=express.Router()

router.post("/products/:productId/like",async(req,res)=>{
    let {productId}=req.params
    let user=req.user
    let isLiked=user.wishlist.includes(productId)
    if(isLiked){
      await  User.findByIdAndUpdate(req.user._id,{$pull:{wishlist:productId}})
    }
    else{
      await  User.findByIdAndUpdate(req.user._id,{$addToSet:{wishlist:productId}})
    }
    res.status(201).send("OK")
})

module.exports=router