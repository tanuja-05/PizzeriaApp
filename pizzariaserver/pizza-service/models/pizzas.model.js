let mongoose = require('mongoose')
let Schema=mongoose.Schema;

let pizzaSchema = new Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    type:{
        type:String,
        enum:["veg","nonveg"],
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ingredients:{
        type:[String],
        required:true
    },
    topping:{
       type:[String],
       required:true
    }
})

let pizzaModel=mongoose.model('pizzas',pizzaSchema)
module.exports={pizzaModel}