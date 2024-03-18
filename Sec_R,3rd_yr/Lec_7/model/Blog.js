const mongoose=require("mongoose")
 const {Schema}=mongoose

 const blogSchema= new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    Class:String,
    blog:String,
    blogId:String
})

const Blog = mongoose.model('Blog', blogSchema)
module.exports=Blog