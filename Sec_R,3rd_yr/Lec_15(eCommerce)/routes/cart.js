const express = require("express")
const router = express.Router()

router.post("/product/cart/:productId", async(req, res) => {
    let { productId } = req.params
    let user = req.user
    let Product = user.cart.find((item) => item.product == productId)
    if (Product) {
        Product.count++;
    }
    else {
        user.cart.push({ product: productId })
    }
   await user.save()
   res.send("Product added successfully!")
})

module.exports = router