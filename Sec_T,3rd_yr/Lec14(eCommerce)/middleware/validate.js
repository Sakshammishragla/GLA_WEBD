const { productSchema, reviewSchema } = require("../schema")

const validateProduct=(req,res,next)=>{
    const {name,price,img,desc}=req.body
    const {error}=productSchema.validate({name,price,img,desc})
    if(error){
        const msg=error.details.map((err)=>err.message).join(",")
        return res.render("error",{err:msg})
    }
    next()
}

const validateReview=(req,res,next)=>{
    const {rating,comment}=req.body
    const {error}=reviewSchema.validate({rating,comment})
    if(error){
        const msg=error.details.map((err)=>err.message).join(",")
        return res.render("error",{err:msg})
    }
    next()
}

module.exports={validateProduct,validateReview}