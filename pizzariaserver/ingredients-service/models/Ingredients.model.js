let mongoose=require('mongoose')
let Schema=mongoose.Schema;

let ingredientsSchema = new Schema({
     id:{
        type:Number,
        required:true,
        unique:true
     },
     tname:{
        type:String,
        required:true
     },
     price:{
        type:Number,
        required:true
     },
     image:{
        type:String,
        required:true
     }
})

let ingredientsModel=mongoose.model('ingredients',ingredientsSchema)
module.exports={ingredientsModel}


