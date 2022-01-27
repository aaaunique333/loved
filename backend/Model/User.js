const mongoose=require('mongoose');

const loginModel=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("admin",loginModel)