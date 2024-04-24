const mongoose =require("mongoose")
const {Schema}=mongoose
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema=new Schema({
    // username - passport local mongooose 
    // password - passport local mongoose
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"buyer"
    }
})

userSchema.plugin(passportLocalMongoose)
const User =mongoose.model("User",userSchema)
module.exports=User