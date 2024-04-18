const mongoose=require("mongoose")
const passportLocalMongoose = require('passport-local-mongoose');
const {Schema}=mongoose

const userSchema=new Schema({

    // username -passportLocalMongoose
    // email -passportLocalMongoose
    email:{
        type:String,
        required:true
    }
})

userSchema.plugin(passportLocalMongoose)
const User=mongoose.model("User",userSchema)
module.exports=User