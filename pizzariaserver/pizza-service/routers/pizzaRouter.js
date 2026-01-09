let express=require('express');
const { insertPizza, getPizza } = require('../controllers/pizzaController');
let pizzaRouter=express.Router();

pizzaRouter.post('/insert',insertPizza);
pizzaRouter.get('/view',getPizza);

module.exports={pizzaRouter};