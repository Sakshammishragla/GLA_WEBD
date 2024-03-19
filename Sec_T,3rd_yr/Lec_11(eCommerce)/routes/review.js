const express = require("express")
const Product = require("../model/Product")
const Review = require("../model/Review")
const router = express.Router()

router.get("/product/:id/addreviews", async(req, res) => {
    console.log("reviews");
    const { rating, comment } = req.query
    let id = req.params.id
    let product =await Product.findById(id)
    let review = new Review({ rating, comment })
    product.reviews.push(review)

   await product.save()
   await review.save()

   res.redirect(`/products/${id}`)
})

module.exports = router