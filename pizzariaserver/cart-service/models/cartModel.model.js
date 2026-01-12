let mongoose = require('mongoose');
let Schema= mongoose.Schema;

let cartSchema=new Schema({
   itemType:{
     type:String,
     enum:["veg","nonveg"],
     required:true
   },
   pizzaId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Pizza",
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
    type:Number
   },
   customIngredients:{
      type:[String]
   }
});

let cartModel=mongoose.model('shoppingcart',cartSchema);
module.exports={cartModel}