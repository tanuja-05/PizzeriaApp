const { ingredientsModel } = require("../models/Ingredients.model");

let insertIngredients=(req,res)=>{
    let {id,tname,price,image}=req.body;
    let insertObj=new ingredientsModel({id,tname,price,image});
    insertObj.save().then(()=>{
       res.send({
        status:1,
        msg:"Ingredients Inserted",
       })
    }).catch((err)=>{
       res.send({
        status:0,
        msg:"error occurred while inserting data",
        err
       })   
    })
     
}

let getIngredients=async(req,res)=>{
    let getIngredients=await ingredientsModel.find();
    res.send({
        status:1,
        msg:"Data get successfully",
        getIngredients
    })
}

module.exports={insertIngredients,getIngredients}

