const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Post = new Schema({
    id:{
        type: Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
   
   
})
module.exports= mongoose.model("Post",Post)