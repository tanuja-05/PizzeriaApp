let {pizzaModel} = require('../models/pizzas.model');

let insertPizza = (req,res)=>{
    let { id,type,price,name,image,description,ingredients,topping } =  req.body;
    let insertObj= new pizzaModel({id,type,price,name,image,description,ingredients,topping });
    insertObj.save().then(()=>{
        res.send(
            {
                status:1,
                msg:"Data inserted"
            }
        )
    }).catch((err)=>{
        res.send({
             status:0,
             msg:"error in inserting data",
             err
        })
        
    })

}

let getPizza=async(req,res)=>{
    let getRes= await pizzaModel.find();
    res.send({
        status:1,
        msg:"Available pizza",
        getRes
    })
}

let getSinglePizza=async(req,res)=>{
    let pizzaId=req.params.id;
    let getRes= await pizzaModel.findOne({_id: pizzaId});
    res.send({
        status:1,
        msg:"Single pizza details",
        getRes
    })
}

module.exports={insertPizza,getPizza,getSinglePizza};