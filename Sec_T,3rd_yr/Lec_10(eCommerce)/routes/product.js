const express = require("express")
const Product = require("../model/Product")
const router = express.Router()

// route for getting all products
router.get("/products",async (req, res) => {
   let products=await Product.find({})
   res.render("allProducts",{products})
})

// route for getting single product
router.get("/products/:id",async(req,res)=>{
    let id=req.params.id
    let product=await Product.findById(id)
    res.render("productPage",{product})
})

module.exports = router