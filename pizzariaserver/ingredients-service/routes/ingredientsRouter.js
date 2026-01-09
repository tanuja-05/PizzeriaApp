let express = require('express');
const { insertIngredients, getIngredients } = require('../controllers/ingredientsController');
let ingredientsRouter = express.Router();

ingredientsRouter.post('/insert',insertIngredients)
ingredientsRouter.get('/view',getIngredients)
module.exports={ingredientsRouter}