const express = require("express")
const Product = require("../model/Product")
const Review = require("../model/Review")
const router = express.Router()

router.get("/product/:id/addreviews", async(req, res) => {
    console.log("reviews");
    const { rating, comment } = req.query
    let id = req.params.id
    console.log(id);
    let product = Product.findOne({_id:id})
    console.log("product",product.reviews);
    let review = new Review({ rating, comment })
    product.reviews.push(review)

   await product.save()
   await review.save()

   res.redirect(`/product/${id}`)
})

module.exports = router