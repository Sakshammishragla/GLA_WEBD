const express = require("express")
const router = express.Router()
const User = require("../model/User")

router.post("/product/cart/:productId", async (req, res) => {
    let { productId } = req.params
    let user = req.user
    let foundProduct = user.cart.find((item) => item.product == productId)
    if (foundProduct) {
        foundProduct.count++;
    }
    else {
        user.cart.push({ product: productId })
    }
    await user.save()
    res.send("Product added successfully!")
})


router.get("/products/cart", async (req, res) => {
    let userId = req.user._id
    let user = await User.findById(userId).populate('cart.product')
    console.log(user.cart);
   res.send("OK")
})

module.exports = router