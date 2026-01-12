let express=require('express');
const { insertPizza, getPizza, getSinglePizza } = require('../controllers/pizzaController');
let pizzaRouter=express.Router();

pizzaRouter.post('/insert',insertPizza);
pizzaRouter.get('/view',getPizza);
pizzaRouter.get('/view/:id',getSinglePizza);
module.exports={pizzaRouter};