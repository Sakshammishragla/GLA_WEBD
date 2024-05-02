const express=require("express")
const Product = require("../model/Product")
const { validateProduct } = require("../middleware/validate")
const { isUserLoggedIn } = require("../middleware/middleware")
const router=express.Router()


router.get("/products",async(req,res)=>{
    let products=await Product.find()
    res.render("allProducts",{products})
})

router.get("/product/:id",isUserLoggedIn,async(req,res)=>{
    let id=req.params.id
   let product=await Product.findById(id).populate("reviews")
   console.log(product);
   res.render("productPage",{product})
})


router.get("/addproduct",(req,res)=>{
    console.log("Request");
    res.render("addProduct")
})

router.post("/addproduct",validateProduct,async(req,res)=>{
    const {name,price,img,desc}=req.body
    await  Product.create({name,price,img,desc})
    res.redirect("/products")
})


module.exports=router