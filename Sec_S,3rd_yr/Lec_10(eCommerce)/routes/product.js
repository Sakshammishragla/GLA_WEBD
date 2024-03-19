const express = require("express")
const Product = require("../model/Product")
const router = express.Router()

router.get("/products", async (req, res) => {
   let products = await Product.find()
   res.render("allProducts", { products })
})

router.get("/product/:id", async (req, res) => {
   let id = req.params.id
   let product = await Product.findById(id).populate("reviews")
   console.log(product);
   res.render("productPage", { product })
})

module.exports = router