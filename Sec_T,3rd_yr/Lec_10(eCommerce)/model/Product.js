const mongoose =require("mongoose")
const {Schema}=mongoose

const productSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    desc:{
        type:String,
        required:true
    },
})

const Product =mongoose.model("Product",productSchema)
module.exports=Product