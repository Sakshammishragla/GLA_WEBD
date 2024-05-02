const express = require("express")
const User = require("../model/User")
const router = express.Router()


router.get("/products/cart",async(req,res)=>{
    let userId=req.user._id
   let user=await User.findById(userId).populate('cart.product')
   console.log(user.cart);
   res.send("OK")
})

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