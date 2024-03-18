const express=require("express")
const Product = require("../model/Product")
const router=express.Router()

router.get("/products",async(req,res)=>{
   await Product.find()
})

module.exports=router