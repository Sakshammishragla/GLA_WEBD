const mongoose=require("mongoose")
const {Schema}=mongoose

const reviewSchema=new Schema({
    rating:{
        type:Number,
        max:5,
        min:0
    },
    comment:{
        type:String,
    }
})

const Review=mongoose.model("Review",reviewSchema)
module.exports=Review