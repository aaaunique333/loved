const mongoose=require('mongoose');

const postModel=mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    category:{
        type:String,
        required:true,
    },
},{
   timestamps:true
})

module.exports=mongoose.model("post",postModel);