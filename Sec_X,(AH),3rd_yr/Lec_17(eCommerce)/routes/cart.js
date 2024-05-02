const express = require("express")
const User = require("../model/User")
const router = express.Router()

router.get("/cart", async (req, res) => {
    console.log("object");
    let id = req.user._id
    let user = await User.findById(id).populate('cart.product')
    console.log(user.cart);
    res.send("OK")
})
router.post("/products/cart/:productId", async (req, res) => {
    let { productId } = req.params
    let user = req.user
    
    const foundProduct = user.cart.find((item) => item.product == productId)
    if (foundProduct) {
        foundProduct.count++;
    }
    else {
        user.cart.push({ product: productId })
    }
    await user.save()
    res.send("Product added successfully!")
})


module.exports = router