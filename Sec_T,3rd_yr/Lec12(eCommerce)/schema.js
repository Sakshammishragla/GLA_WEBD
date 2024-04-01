const Joi=require("joi")

const productSchema=Joi.object({
    name:Joi.string().required(),
    price:Joi.number().min(0).required(),
    img:Joi.string().required(),
    desc:Joi.string().required()
})


const reviewSchema=Joi.object({
    rating:Joi.number().min(0).max(5),
    comment:Joi.string()
})

module.exports={productSchema,reviewSchema}