let mongoose = require('mongoose');
let Schema= mongoose.Schema;

let cartSchema=new Schema({
   itemType:{
     type:String,
     enum:["pizza","ingredient"],
     required:true
   },
   pizzaId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Pizza",
      default:null
   },
   ingredientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Ingredient",
    default:null
   },
   name:{
    type:String,
    required:true,
    trim:true
   },
   image:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   quantity:{
    type:Number,
    default:1,
    min:1
   },
   totalPrice:{
    type:Number,
    required:true
   },

});

let cartModel=mongoose.model('shoppingcart',cartSchema);
module.exports={cartModel}