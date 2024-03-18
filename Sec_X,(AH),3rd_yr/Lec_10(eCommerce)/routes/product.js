const express =require("express")
const Product = require("../model/Product")
const router =express.Router()

router.get("/products",async(req,res)=>{
   let products=await Product.find()
   res.render("allProducts",{products})
})

module.exports=router