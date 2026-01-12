let {cartModel}=require('../models/cartModel.model');

let insertItem = (req,res)=>{
    let{ itemType,pizzaId,ingredientId,name,image,price,quantity, totalPrice,customIngredients }=req.body;
    let insertObj= new cartModel({ itemType,pizzaId,ingredientId,name,image,price,quantity, totalPrice,customIngredients });
    insertObj.save().then(()=>{
        res.send({
            status:1,
            msg:"Item inserted Successfully",
        })
    }).catch((err)=>{
        res.send({
            status:0,
            msg:"Error has occurred in inserting data",err
        })
    })
}

let viewCart=async(req,res)=>{
    let viewRes=await cartModel.find();
    res.send({
        status:1,
        msg:"Cart items here",
        viewRes
    })
}

let deleteItem=async(req,res)=>{
    let deleteId=req.params.id;
    let delRes=await cartModel.deleteOne({_id:deleteId});
    res.send({
        status:1,
        msg:"Deleted item from cart",
        delRes
    })
}
let updateItem=async(req,res)=>{
    let updateId=req.params.id;
     let{ itemType,pizzaId,ingredientId,name,image,price,quantity, totalPrice }=req.body;
     let updateObj={itemType,pizzaId,ingredientId,name,image,price,quantity, totalPrice };
     let updateRes = await cartModel.updateOne({_id:updateId},updateObj);
     res.send({
        status:1,
        msg:"Item in the cart is updated",
        updateRes
     })
}
module.exports={insertItem,viewCart,deleteItem,updateItem}

